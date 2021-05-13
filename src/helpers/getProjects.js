export const getProjects = async () => {
  const url =
    "https://portfolio-react-5f0f7-default-rtdb.firebaseio.com/proyects.json";
  const resp = await fetch(url);
  const data = await resp.json();

  const pro = data.map((p) => {
    return {
      id: p.id,
      title: p.title,
      url: p.url,
      desc: p.desc,
      repo: p.repo,
    };
  });
  return pro;
};
