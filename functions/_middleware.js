export const onRequestGet = async (c) => {
  return new Response((await c.env.ASSETS.fetch(c.request)).body, {
    status: 410,
    headers: {
      'content-type': 'text/html; charset=utf-8',
    },
  });
};
