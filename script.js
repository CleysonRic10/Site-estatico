// index
/* Debug viewport size */
const debug = document.querySelector(".viewport-debug");
function updateViewportSize() {
    debug.textContent =
    `Viewport: ${window.innerWidth} × ${window.innerHeight}`;
}
updateViewportSize();
window.addEventListener("resize", updateViewportSize);
/* Debug viewport size */
