import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function textReveal(
  element: string,
  options?: {
    start?: string;
    end?: string;
    scrub?: number;
  }
) {
  return gsap.fromTo(
    element,
    { opacity: 0, filter: "blur(10px)" },
    {
      opacity: 1,
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: element,
        start: options?.start ?? "top 80%",
        end: options?.end ?? "top 50%",
        scrub: options?.scrub ?? 1,
      },
    }
  );
}

export function fadeUpStagger(
  element: string,
  options?: {
    y?: number;
    duration?: number;
    stagger?: number;
    start?: string;
  }
) {
  return gsap.from(element, {
    y: options?.y ?? 50,
    opacity: 0,
    duration: options?.duration ?? 0.8,
    stagger: options?.stagger ?? 0.15,
    scrollTrigger: {
      trigger: element,
      start: options?.start ?? "top 70%",
      toggleActions: "play none none reverse",
    },
  });
}

export function counterAnimation(
  element: string,
  target: number,
  options?: {
    duration?: number;
    start?: string;
  }
) {
  return gsap.to(element, {
    innerText: target,
    duration: options?.duration ?? 2,
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: element,
      start: options?.start ?? "top 85%",
      toggleActions: "play none none reverse",
    },
  });
}
