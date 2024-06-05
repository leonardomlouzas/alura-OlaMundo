import "./aboutMe.css";
import PostModel from "../../components/PostModel";
import aboutMe from "/src/assets/sobre_mim_capa.png";
import pfp from "/src/assets/pfp.jpg";
export default function AboutMe() {
  return (
    <PostModel cover={aboutMe} title="Sobre mim">
      <h3 className="supertitle">Olá, eu sou o Leonardo!</h3>
      <img src={pfp} alt="Foto de Leonardo" className="pfp" />
      <p className="paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ipsa
        expedita deleniti perspiciatis? Veniam explicabo accusantium molestias?
        Natus ratione doloremque repudiandae eius molestiae laboriosam officia
        odio obcaecati. Excepturi, voluptas consequuntur.
      </p>

      <p className="paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ipsa
        expedita deleniti perspiciatis? Veniam explicabo accusantium molestias?
        Natus ratione doloremque repudiandae eius molestiae laboriosam officia
        odio obcaecati. Excepturi, voluptas consequuntur. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Libero ipsa expedita deleniti
        perspiciatis? Veniam explicabo accusantium molestias? Natus ratione
        doloremque repudiandae eius molestiae laboriosam officia odio obcaecati.
        Excepturi, voluptas consequuntur.
      </p>
      <p className="paragraph">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero ipsa
        expedita deleniti perspiciatis? Veniam explicabo accusantium molestias?
        Natus ratione doloremque repudiandae eius molestiae laboriosam officia
        odio obcaecati. Excepturi, voluptas consequuntur. Lorem ipsum, dolor sit
        amet consectetur adipisicing elit. Libero ipsa expedita deleniti
        perspiciatis? Veniam explicabo accusantium molestias? Natus ratione
        doloremque repudiandae eius molestiae laboriosam officia odio obcaecati.
        Excepturi, voluptas consequuntur.
      </p>
    </PostModel>
  );
}
