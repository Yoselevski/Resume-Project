import FooterStyle from './Footer.module.css';
import ItemPic from '../pictures/ItemPic';



    const ItemsPic = [
        {
          id: 'javascript',
          Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
          alt: "javascript",
          width:'50',
          height:'50',
          Checking: false
        },
        {
            id: 'typescript',
            Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
            alt: "typescript",
            width:'50',
            height:'50',
            Checking: false
          },
          {
            id: 'cpp',
            Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
            alt: "cpp",
            width:'50',
            height:'50',
            Checking: false
          },
          {
            id: 'java',
            Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
            alt: "java",
            width:'50',
            height:'50',
            Checking: false
          },
          {
            id: 'python',
            Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            alt: "python",
            width:'50',
            height:'50',
            Checking: false
          },
          {
            id: 'React',
            Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            alt: "React",
            width:'50',
            height:'50',
            Checking: true
          },
          {
            id: 'html',
            Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            alt: "html",
            width:'50',
            height:'50',
            Checking: true

          },
          {
            id: 'css',
            Link: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            alt: "css",
            width:'50',
            height:'50',
            Checking: true

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
            <section className={FooterStyle.item}>
                <ul>{Signs}</ul>
            </section>
          );
};

export default Footer;