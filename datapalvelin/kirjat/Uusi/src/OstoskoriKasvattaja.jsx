

function OstoskoriKasvattaja({ kirjaId, maara, lisaaOstos, vahennaOstos }) {
  return (
    <div>
      <button onClick={() => vahennaOstos(kirjaId)}>-</button>
      <span>{maara}</span>
      <button onClick={() => lisaaOstos(kirjaId)}>+</button>
    </div>
  );
}

export default OstoskoriKasvattaja;
