import React from "react";

export const Main = () => {
  return (
    <div className="appMain">
      <div className="app__AboutMe" id="s1">
        <section className="block__About">
          <div className="block__textAbout">
            <h1>
              Welcome To <br /> My Personal Portfolio
            </h1>
            <p>
              Я закончил высшее экономическое, но понял, что я не хочу быть
              никак связан с экономикой и бухгвлтерией. Самым близким моему
              сердцу оказалась направление IT. Я поставил себе цель стать
              сеньором до 30 и все будет збс!
            </p>
          </div>
          <div className="block__imgAbout">
            <img
              className="img__imgAbout"
              src="https://warcry.ru/gallery/pictures/1189.jpg"
            ></img>
          </div>
        </section>
      </div>
      <div className="app__Skills" id="s2">
        <section className="block__Skills">
          <div className="block__textSkills">
            <p>
              Как начинающий разработчик у меня конечно не миллион разных языков
              программирования и знание всех возможных платформ на свете, но все
              же список моих занинй неплох вот. Поэтому вгляните пожалуйста вот!
            </p>
          </div>
          <div>Icons</div>
        </section>
      </div>
      <div className="app__Works" id="s3">
        <section className="block__Works">
          <div className="panel__cover">
            <div className="tag" id="p1">
              #JavaScript
            </div>
            <div className="tag" id="p2">
              #React
            </div>
            <div className="tag" id="p3">
              #Sass
            </div>
          </div>
          <div className="block__cover">
            <div class="box project1"></div>
            <div class="box project2"></div>
            <div class="box project1"></div>
            <div class="box project2"></div>
            <div class="box project3"></div>
          </div>
        </section>
      </div>
      <div className="appContacts" id="s4">
        {" "}
        <div className="block__Contacts"></div>
      </div>
    </div>
  );
};
