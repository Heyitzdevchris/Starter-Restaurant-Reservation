export default function asyncErrorBoundary(delegate, defaultStatus) {
  return (request, response, next) => {
    Promise.resolve()
      .then(() => delegate(request, response, next))
      .catch((error) => {
        const { status = defaultStatus, nessage = error } = error || {};
        next({
          status,
          message,
        });
      });
  };
}
