import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Equipment from "../Equipment.vue";

describe("Equipmen", () => {
  it("renders properly", () => {
    const wrapper = mount(Equipment);
    expect(wrapper.text()).toContain("40VMxxxx");
  });
});
