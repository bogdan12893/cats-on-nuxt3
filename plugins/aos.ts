export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('aos', {
    beforeMount(el, { value }) {
      const observerOptions = {
        threshold: 0,
      };

      const animateOnScrollObserver = new IntersectionObserver(handleIntersection, observerOptions);

      const enterClasses = value.enter.split(',');

      el.classList.add(value.before);
      animateOnScrollObserver.observe(el);

      function handleIntersection(entries) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(...enterClasses);
            animateOnScrollObserver.unobserve(entry.target);
          }
        });
      }
    },
  });
});
