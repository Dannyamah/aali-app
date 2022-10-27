<template>
  <div id="contact">
    <div class="row m-5 connect">
      <div class="col-lg-12 text-center">
        <p class="red-span font-weight-bold">Get in Touch</p>
        <h1 class="text-dark font-weight-bolder">
          Connect with Me with Confidence
        </h1>
      </div>
    </div>

    <div class="row form" style="padding: 20px 60px">
      <div class="col-lg-6 contact">
        <p>
          Please fill out the form on this section to contact with me. Or call
          between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
        </p>

        <div>
          <span class="fa fa-phone-alt" style="font-size: 40px"> </span>
        </div>
        <br /><br />
        <div>
          <span class="fa fa-inbox" style="font-size: 40px"></span>
        </div>
      </div>
      <div class="col-lg-6 contact">
        <form action="">
          <div class="">
            <div>
              <input type="text" placeholder="Your Name" />
            </div>
            <div>
              <input type="email" placeholder="Your Email" />
            </div>
            <div>
              <input type="tel" placeholder="Your Phone" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Your Message Here"
                style="height: 140px"
              />
            </div>
            <button class="mt-4 btn btn-dark">
              Submit Message <span class="fab fa-telegram-plane"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  components: {},
};
</script>

