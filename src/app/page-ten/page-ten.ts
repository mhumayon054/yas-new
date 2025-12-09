import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WinterLook2526 } from "../winterLook2526/winterlook25-26";
import { MainPage } from "../main-page/main-page";
import { Footer } from "../footer/footer";

@Component({
  selector: "app-page-ten",
  standalone: true,
  imports: [CommonModule, WinterLook2526, MainPage, Footer],
  templateUrl: "./page-ten.html",
  styleUrls: ["./page-ten.scss"],
})
export class PageTen {
  lookDatas = [
    {
      name: 'LOOK 1',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%201.1.jpg?updatedAt=1765288732356',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%201.2.jpg?updatedAt=1765288656567',
      text: 'A sculpted black-and-ivory gown adorned with intricate crystal embroidery. The elongated silhouette and sweeping train create a striking contrast, blending modern structure with timeless couture elegance.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 2',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%202.1.jpg?updatedAt=1765288701262',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%202.2.jpg?updatedAt=1765288739549',
      text: 'Golden-pearl shells drape the black silhouette in shimmering fragments, each one trailing delicate crystal fringe. A soft, shadowy skirt completes the look, turning structure into fluid storytelling.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 3',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%203.1.jpg?updatedAt=1765288677889',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%203.2.jpg?updatedAt=1765288738872',
      text: 'A flared architectural bodice adorned with textured beaded spheres tops a shimmering embroidered skirt. A lace-up back completes the gown’s sculptural elegance.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 4',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%204.1.jpg?updatedAt=1765288742404',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%204.2.jpg?updatedAt=1765288747036',
      text: 'A masterpiece of couture artistry, the gown pairs a fully hand-embroidered crystal bodice with sculpted silk petals that cascade in thousands from shoulder to hem, creating a luminous, cloudlike silhouette that moves with extraordinary grace.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 5',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%205.1.jpg?updatedAt=1765288736671',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%205.2.jpg?updatedAt=1765288754587',
      text: 'Black lace traces the body with delicate precision, revealing a sculpted bralette above a sheer skirt covered in hand-placed metallic charms and crystals. A striking balance of softness and structure, finished with a tapestry of jeweled detail.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 6',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%206.1.jpg?updatedAt=1765288741942',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%206.2.jpg?updatedAt=1765288806655',
      text: 'An architectural black masterpiece, crafted through layered panels, intricate ruffled detailing, and elongated lace-up construction. The silhouette is both powerful and feminine, merging structured tailoring with fluid craftsmanship.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 7',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%207.1.jpg?updatedAt=1765288709249',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%207.2.jpg?updatedAt=1765288716762',
      text: 'A high-shine gold metallic gown designed with a dramatic flared neckline and a sleek column silhouette. The mirrored hexagon panels catch the light beautifully, while golden embroidered bands add dimension and handcrafted detail.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 8',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%208.1.jpg?updatedAt=1765288723648',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%208.2.jpg?updatedAt=1765288711379',
      text: 'Rounded pleated tiers bring unexpected depth and dimension to the gown, while soft ruffled layers at the bodice introduce an elegant contrast. A luxurious balance of structure and lightness.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 9',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%209.1.jpg?updatedAt=1765288753272',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%209.2.jpg?updatedAt=1765288855399',
      text: 'Woven organza ribbons trace the body in an intricate pattern, their paths crossing and spiraling with sculptural intention. A whisper of transparency beneath reveals soft contours, while metal detailing adds a cool, refined edge. A perfect balance of artistry and allure.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 10',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2010.1.jpg?updatedAt=1765288740136',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2010.2.jpg?updatedAt=1765288748299',
      text: 'A gown born from molten gold and ember light. Sculpted cord embroidery wraps the body in intricate curves, while thousands of hand-woven beads cascade into fiery drapes that shimmer with every breath. A masterpiece of movement, texture, and glow.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 11',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2011.1.jpg?updatedAt=1765288731254',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2011.2.jpg?updatedAt=1765288725917',
      text: 'Turquoise embroidery glimmers across sheer tulle, forming a rhythm of crystals and beads that trace the silhouette. With its cut-out center and sweeping lines, the gown moves like light over water.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 12',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2012.1.jpg?updatedAt=1765288721694',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2012.2.jpg?updatedAt=1765288745357',
      text: 'A midnight-black gown illuminated by lavish gold embroidery from bodice to hem. The sculpted strapless neckline and lace-up back frame the figure with refined seduction, while the long, fluid skirt enhances each movement with golden light. A statement piece for evenings where luxury is expected.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 13',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2013.1.jpg?updatedAt=1765288738291',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2013.2.jpg?updatedAt=1765288739749',
      text: 'A meticulously beaded gown that creates the illusion of sculpted panels, blending dramatic shoulders with a fluid ombré of bronze to champagne crystals. A seamless silhouette built entirely from light.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 14',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2014.1.jpg?updatedAt=1765288732058',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2014.2.jpg?updatedAt=1765288732409',
      text: 'A one-shoulder gown traced with sweeping lines of silver crystals, complete with long, delicate fringes that drape from the shoulder to create radiant motion.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 15',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2015.1.jpg?updatedAt=1765288715678',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2015.2.jpg?updatedAt=1765288663210',
      text: 'A striking black creation with a plunging illusion bodice and dramatic rounded sleeves. Ornate crystal motifs highlight the neckline, waist, and skirt, flowing into a sheer embellished hem for a modern couture impact.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 16',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2016.jpg?updatedAt=1765288732581',
      text: 'A bold black silhouette shaped by a fluid neckline and a lattice of sparkling embellishments. Earthy shadows and jeweled brilliance meet in a look both grounded and exquisitely refined.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 17',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2017.1.jpg?updatedAt=1765288745924',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2017.2.jpg?updatedAt=1765288757644',
      text: 'A strapless embroidered gown featuring a fitted, jewel-studded bodice and an asymmetric embellished sleeve, beaded fringes fall from the waist and arm, creating dramatic movement with every step while revealing a high slit beneath the textured layers.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 18',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2018.jpg?updatedAt=1765288717863',
      text: 'A bold off-shoulder bodice with curved sculptural panels and crystal leaf embroidery sets the tone for this design. Below, the ruched skirt opens to reveal a black lace dentelle inner panel, adding sensual contrast and layered texture beneath the flowing drape.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 19',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2019.jpg?updatedAt=1765288721062',
      text: 'A couture canvas of leopard embroidery, mapped in gradients of ivory, honey, and burnished gold. Sculpted shoulders and a sharp, linear cut transform an untamed pattern into pure high fashion.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 20',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2020.1.jpg?updatedAt=1765288750342',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2020.2.jpg?updatedAt=1765288849704',
      text: 'This antique gold gown is built from dimensional leaf appliqués, each hand-embroidered with micro-crystals, sequins, and metallic threads. The sculpted bodice and fitted skirt merge into a shimmering composition enriched with a front slit. A true celebration of artisanal detail.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 21',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2021.1.jpg?updatedAt=1765288729556',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2021.2.jpg?updatedAt=1765288748841',
      text: 'A weightless teal couture gown crafted from sheer beaded tulle, designed to elongate the silhouette with vertical lines of hand-placed crystals. Its flowing cape moves like liquid light, creating an aura of modern elegance',
      showSecondImage: true,
    },
    {
      name: 'LOOK 22',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2022.1.jpg?updatedAt=1765288696789',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2022.2.jpg?updatedAt=1765288708087',
      text: 'A shimmering, meticulously beaded bodice anchors this mint creation, releasing into pleated chiffon panels that glide effortlessly. The double slit and full-length cape elevate the gown into pure luxury theater.',
      showSecondImage: true,
    },
    {
      name: 'LOOK 23',
      img: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2023.1.jpg?updatedAt=1765288732461',
      img2: 'https://ik.imagekit.io/5sbqruotr/Fall%20Winter%20Images%20-2025-2026/LOOK%2023.2.jpg?updatedAt=1765288749456',
      text: 'An architectural gold mini dress adorned with thousands of hand-applied crystals and metallic beads. Strong shoulders, sculpted cutouts, and intricate geometric embroidery create a silhouette that shines with uncompromising couture craftsmanship.',
      showSecondImage: true,
    },

  ];
}
