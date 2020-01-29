const TestimonialModel = require("./../database/models/testimonial_model");
const axios = require('axios')
const jsdom = require('jsdom')
const { JSDOM } = jsdom

const getTestimonials = async (req, res) => {
  
  let results

  await axios.get("https://www.facebook.com/pg/PeskyPooch/reviews/?referrer=page_recommendations_see_all&ref=page_internal")
  .then(res => {
    const dom = new JSDOM(
      res.data,
      { includeNodeLocations: true }
    )
    const document = dom.window.document
    let reviews = Array.from(
      document.getElementById('recommendations_tab_main_feed')
      .querySelectorAll("[data-testid='post_message']")
    ).map(item => item.textContent)
    results = reviews
    }
  )
  .catch(err => console.log(err))
  if (results) {
    res.json(results)
  } else {
    res.status(500).send("Could not retrieve reviews")
  } 
}

module.exports = {
  getTestimonials
}
