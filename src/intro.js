import { useState, useEffect } from "react";

export default function Intro() {
  const [text, setText] = useState("");
  const message = "𝕎𝕖𝕝𝕔𝕠𝕞𝕖 𝕥𝕠 𝕞𝕪 𝕡𝕠𝕣𝕥𝕗𝕠𝕝𝕚𝕠! 𝕄𝕪 𝕟𝕒𝕞𝕖 𝕚𝕤 𝒪𝒯𝐻𝑀𝒜𝒩 𝐸𝐿 𝐵𝒜𝒮𝐼𝑅𝐼 𝕒𝕟𝕕 𝕀 𝕒𝕞 𝕒 𝕗𝕦𝕝𝕝-𝕤𝕥𝕒𝕔𝕜 𝕕𝕖𝕧𝕖𝕝𝕠𝕡𝕖𝕣 𝕨𝕚𝕥𝕙 𝕒 𝕡𝕒𝕤𝕤𝕚𝕠𝕟 𝕗𝕠𝕣 𝕔𝕣𝕖𝕒𝕥𝕚𝕟𝕘 𝕚𝕟𝕟𝕠𝕧𝕒𝕥𝕚𝕧𝕖 𝕒𝕟𝕕 𝕦𝕤𝕖𝕣-𝕗𝕣𝕚𝕖𝕟𝕕𝕝𝕪 𝕒𝕡𝕡𝕝𝕚𝕔𝕒𝕥𝕚𝕠𝕟𝕤. 𝕋𝕙𝕣𝕠𝕦𝕘𝕙𝕠𝕦𝕥 𝕞𝕪 𝕤𝕥𝕦𝕕𝕚𝕖𝕤, 𝕀 𝕙𝕒𝕧𝕖 𝕘𝕒𝕚𝕟𝕖𝕕 𝕖𝕩𝕡𝕖𝕣𝕚𝕖𝕟𝕔𝕖 𝕨𝕠𝕣𝕜𝕚𝕟𝕘 𝕨𝕚𝕥𝕙 𝕧𝕒𝕣𝕚𝕠𝕦𝕤 𝕗𝕣𝕒𝕞𝕖𝕨𝕠𝕣𝕜𝕤 𝕒𝕟𝕕 𝕙𝕒𝕧𝕖 𝕔𝕠𝕞𝕡𝕝𝕖𝕥𝕖𝕕 𝕟𝕦𝕞𝕖𝕣𝕠𝕦𝕤 𝕤𝕞𝕒𝕝𝕝 𝕖𝕩𝕡𝕖𝕣𝕚𝕞𝕖𝕟𝕥𝕤 𝕥𝕠 𝕤𝕙𝕒𝕣𝕡𝕖𝕟 𝕞𝕪 𝕤𝕜𝕚𝕝𝕝𝕤. 𝕋𝕙𝕚𝕤 𝕡𝕠𝕣𝕥𝕗𝕠𝕝𝕚𝕠 𝕙𝕚𝕘𝕙𝕝𝕚𝕘𝕙𝕥𝕤 𝕞𝕪 𝕤𝕜𝕚𝕝𝕝𝕤 𝕚𝕟 𝕨𝕖𝕓 𝕕𝕖𝕧𝕖𝕝𝕠𝕡𝕞𝕖𝕟𝕥, 𝕗𝕣𝕠𝕟𝕥-𝕖𝕟𝕕 𝕕𝕖𝕤𝕚𝕘𝕟, 𝕒𝕟𝕕 𝕓𝕒𝕔𝕜-𝕖𝕟𝕕 𝕡𝕣𝕠𝕘𝕣𝕒𝕞𝕞𝕚𝕟𝕘. 𝕋𝕒𝕜𝕖 𝕒 𝕝𝕠𝕠𝕜 𝕒𝕣𝕠𝕦𝕟𝕕 𝕒𝕟𝕕 𝕗𝕖𝕖𝕝 𝕗𝕣𝕖𝕖 𝕥𝕠 𝕔𝕠𝕟𝕥𝕒𝕔𝕥 𝕞𝕖 𝕨𝕚𝕥𝕙 𝕒𝕟𝕪 𝕢𝕦𝕖𝕤𝕥𝕚𝕠𝕟𝕤 𝕠𝕣 𝕡𝕣𝕠𝕛𝕖𝕔𝕥 𝕚𝕟𝕢𝕦𝕚𝕣𝕚𝕖𝕤.";

  function typeEffect() {
    for (let i = 0; i < message.length; i++) {
      setTimeout(() => {
        setText(message.substring(0, i + 1));
      }, i * 10);
    }
  }

  useEffect(() => {
    typeEffect();
  }, []);

  return (
    <div className="intro">
      <h1 style={{color:"black",height: "auto"}} className="intro-text">{text}</h1>
    </div>
  );
}
