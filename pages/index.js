import Head from 'next/head'


// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />

<style rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"> </style>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js"></script>
  
     </Head>

      <main>
  

<ul className="Nav">
  <li><a href="https://www.linkedin.com/in/zuko-luvalo-6a6858197">LinkedIn Profile</a></li>
  <li><a href="https://drive.google.com/file/d/1g6yfMIyorhRezV6Jnq1pwEmsgcQMMPAM/view?usp=sharing">Sovtech Video Entry</a></li>
  <li><a href="https://drive.google.com/file/d/1AaWw5lQzsJxPY1R_jZD5FZu0xNu_h_lw/view?usp=sharing">Latest Transcript</a></li>
  <li><a href="https://drive.google.com/file/d/1BfO8W6nEL2B7CRoqmx_ek9q4vPELJSyf/view?usp=sharing">RPA Certificate</a></li>
</ul>

       <img src="data:image/jpeg;base64,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" alt="Vercel" />
       

<h1 className="title">
            Welcome to Zuko Luvalo's Portfolio
        </h1>
        <div className="grid">
          

          <a className="card">
           
<h2>Who is Zuko Luvalo?</h2>
        <p className="description">
     I am a pasionate I.T graduate who is looking for an oportunity to develop and showcase my skills in the in the decipline of software development
I have skills in Robotic Process automation, Research and data
visualization.I am young and talented ,always willing to learn with an ability to solve big problems using simple
logic and reliable principles.
My interest include Mixed Martial Arts, Programming ,Video games and technology.
I am a good speaker able to present ideas and engage a large audience through my experience in retail.
I am an open minded person who is open to new idea and i am a forward thinking individual always looking to the
future to solve the problems of today.

 
</p>       

  </a>
<a className="card">
       <h3>   Why did you choose this career path?
        </h3>
<p>
When I was a child I had always been facinated by video games and ever since then I had been inpired to become a video game designer but as I got older and studied software development ,I discovered how chalenging a carreer in video game design wpuld become.
Upon my graduation in the field of software development I had decided to focus on software development instead of video games. I realized that video games are developed by the best computer scientist and software solutions are easier to develop.  
I decided to become a software developer due to the great need of software innovation in South Africa.
I am facinated by the fast-paced and innovative nature of software development.
Businesses are constantly looking for more convenience, automation of tedious tasks, and more the need for software engineers will continue to rise.
           </p>

          </a>

          <a className="card">
            <h3>Why are you passionate about software developmet? &rarr;</h3>
            <p>
I am passionate about creating quality software because Coding is a very direct way to realize that goal. But it is not the only way.
I think a passion for creation is a good thing in a person. Coding is a very real form of creation.
I love Programming because it presents a great deal of mental challenge, as well as the possibility of coming up with new ideas and bringing them to fruition.
I love to code because it is usable art, I can create something and people interact with, use, touch and work with.That is an amazing feeling.
I love to code because if I can think it, I can make it a reality.Unlike physics where physical restraints are in everything you do, there are no limitations in coding besides your ability to think of a logically consistent solution.
</p>
          </a>

          <a className="card"  >
            <h3>Why do I hope to be a part of our Graduate Programme?</h3>
            <p>
           I am currently looking for an opportunity to gain more experience in the field of software development because I have gained a lot of experience in the field of data governance and providing information as a service but I have not been awarded the opportunity to develop software solutions outside of Robotic Process Automation.
          This graduate program is my best opportunity to be mentored in the field of software development thus allowing me to strengthen the technical skills that I may be lacking in order to become a software developer. Through this learnership I would like to become a part of a custom software development company that provides complete software design and development services.
 </p>
          </a>
      </div>
  
      </main>

      <footer>
        <a
          target="_blank"
          rel="noopener noreferrer"
        >
          Thank You Sovtech{' '}
          <img src="data:image/jpeg;base64,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" className="logo" />
        </a>
      </footer>

      <style jsx>{`
.wrapper .sidebar{
    background: rgb(5, 68, 104);
    position: fixed;
    top: 0;
    left: 0;
    width: 225px;
    height: 100%;
    padding: 20px 0;
    transition: all 0.5s ease;
}
ul {
  width: 100%;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #424242
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #FF8A65;
}
        .container {
          min-height: 100vh;
         
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 2rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
         
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          margin-top: 3rem;
        }
body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #607D8B;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 3em;
          width:12em
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}


</style>
    </div>
  )
}
