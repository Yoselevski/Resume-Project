import FooterStyle from './Footer.module.css';
import ItemPic from '../pictures/ItemPic';


    const ItemsPic = [
        {
          id: 'javascript',
          Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          alt: "javascript",
          width:'30',
          height:'40'
        },
        {
            id: 'typescript',
            Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
            alt: "typescript",
            width:'30',
            height:'40'
          },
          {
            id: 'cpp',
            Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
            alt: "cpp",
            width:'30',
            height:'40'
          },
          {
            id: 'java',
            Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
            alt: "java",
            width:'55',
            height:'40'
          },
      ];
      const Footer=()=>{
        const Signs = ItemsPic.map((currLink) => (
          <ItemPic
            id={currLink.id}
            Link={currLink.Link}
            alt={currLink.alt}
            width={currLink.width}
            height={currLink.height}
          />
        ));
      
      
        return (
            <section className={FooterStyle.ItemPic}>
                <ul>{Signs}</ul>
            </section>
            
          );
};

export default Footer;