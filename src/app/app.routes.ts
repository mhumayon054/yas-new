import type { Routes } from "@angular/router"
import { Stepper } from "./stepper/stepper"
import { PageOne } from "./page-one/page-one"
import { PageTwo } from "./page-two/page-two"
import { PageThree } from "./page-three/page-three"
import PageFour from "./page-four/page-four"
import { PageFive } from "./page-five/page-five"
import { Look } from "./look/look"
import { Looksshow } from "./looksshow/looksshow"
import { SliderFour } from "./slider-four/slider-four"
import { Form } from "./form/form"
import { PageSix } from "./page-six/page-six"
import { PageSeven } from "./page-seven/page-seven"
import { PageEight } from "./page-eight/page-eight"
import { SummerLooksshow } from "./summerlooksshow/summerlooksshow"
import { WinterLooksshow } from "./winterlooksshow/winterlooksshow"
import PageNine from "./page-nine/page-nine"   
import { PageTen } from "./page-ten/page-ten";
import { WinterLooksshow2526 } from "./winterlooksshow25-26/winterlooksshow25-26";

export const routes: Routes = [
  { path: "", component: PageOne, pathMatch: "full" },
  { path: "main-page", component: PageOne },
  { path: "SummerSpring", component: PageThree },
  { path: "WinterFall", component: PageFour },             
  { path: "WinterFall-2025-2026", component: PageNine },   
  { path: "Bridal", component: PageTwo },
  { path: "SpotLight", component: PageFive },
  { path: "BookAppointment", component: Stepper },
  { path: "WinterLooks", component: PageSix },
    { path: "WinterLooks-2025-2026", component: PageTen },
  { path: "contact-us", component: PageSeven },
  { path: "summerLooks", component: PageEight },
  { path: "look", component: Look },
  { path: "looksShow", component: Looksshow },
  { path: "summerlooksshow", component: SummerLooksshow },
  { path: "winterlooksshow", component: WinterLooksshow },
    { path: "winterlooksshow-25-26", component: WinterLooksshow2526 },
  { path: "slider", component: SliderFour },
  { path: "form", component: Form },
];
