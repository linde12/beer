export default (fn, wait) => {
  let timeout;
  return function() {
    const ctx = this
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => fn.apply(ctx, args), wait)
  }
}
