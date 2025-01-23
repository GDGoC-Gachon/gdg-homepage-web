export const scrollToSection = (target: HTMLElement, duration: number = 1000) => {
  const targetPosition = target.offsetTop;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime: number | null = null;

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    const scrollAmount = startPosition + distance * easeOutCubic(progress);
    window.scrollTo(0, scrollAmount);

    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
