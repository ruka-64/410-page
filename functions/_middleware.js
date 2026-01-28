export const onRequestGet = async (c) => {
  return new Response((await c.env.ASSETS.fetch(c.request)).body, {
    status: 410,
  });
};
