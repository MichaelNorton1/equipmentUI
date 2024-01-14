import { mount } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { describe, it, expect } from "vitest";

import App from "@/App.vue";
// import About component
import AboutView from "@/views/AboutView.vue";
import NavVue from "../Nav.vue";

describe("App", () => {
  it("renders a component via routing", async () => {
    // create a local router
    // with '/about' route
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/about",
          name: "About",
          component: AboutView,
        },
      ],
    });

    // navigate to route
    router.push("/about");

    // await navigation from push()
    await router.isReady();

    // install the local router
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });

    // if the About route exists
    // the routing was successful
    expect(wrapper.findComponent(NavVue).exists()).toBe(true);
  });
});
