import Image from "next/image";
import "../../css/index.css";

export default function Hero() {
  return (
    <main className="body">
      <div className="parent">
        <div className="div1">
          <Image
            src="/Align Justify.svg"
            alt="Menu Bar"
            width={45}
            height={45}
          />
        </div>
        <div className="div2 bg-green-700">
          <h1>Concerts</h1>
          <Image
            id="img-music"
            src="/Chante.png"
            alt="Concert"
            width={130}
            height={130}
            priority
          />
        </div>
        <div className="div3">
          <label className="">
            <input
              type="text"
              className="input"
              placeholder="Email"
              id="email"
              name="email"
            />
            <button className="btn glass">Restez connecté</button>
          </label>
        </div>
        <div className="div4 bg-slate-600"> 4 </div>
        <div className="div5 bg-yellow-400"> 5 </div>
      </div>
    </main>
  );
}
