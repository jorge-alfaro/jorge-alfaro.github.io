export const FooterInfo = () => {
  const today = new Date();

  return (
    <footer>
      <div className="ja">@ {today.getFullYear()} Jorge Alfaro.</div>
    </footer>
  );
};
