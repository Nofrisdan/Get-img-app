import axios from "axios";
import ch from "cheerio";
import prt from "pretty";

export const index_page = (req, res) => {
  const data = {
    title: "Get IMG APP",
    file: false,
  };
  res.render("index", data);
};

export const get_url = async (req, res) => {
  const { link } = req.body;

  //   scraping
  const markUp = await axios.get(link);

  const $ = ch.load(markUp.data);
  const img = $("img");
  let arr = [];
  img.each((idx, el) => {
    const result = cek_url(el.attribs.src, link);
    arr.push(result);
  });

  const data = {
    title: "Get IMG APP",
    file: arr.length == 0 ? false : true,
    src: arr,
  };
  res.render("index", data);
};

const cek_url = (url, link) => {
  let param = ["https:", "http:"];

  //   clean in link root
  let link_1 = link.split("");
  link_1 = link_1[link_1.length - 1];

  let link_clean = "";
  if (link_1 != "/") {
    link_clean = link;
  } else {
    link_clean = link.slice(0, -1);
  }

  //   clean url image
  const arr_url = url.split("");
  const arr_url2 = url.split("/");
  let url_clean = "";

  if (arr_url[0] == "/") {
    url_clean = url.substring(1);
  } else {
    url_clean = url;
  }

  for (let i = 0; i < param.length; i++) {
    if (arr_url2.includes(param[i])) {
      // jika url lengkap
      return url_clean;
    } else {
      return link_clean + "/" + url_clean;
      //   return "link tidak lengkap";
    }
  }
};

// ======== EMPTY ==========
