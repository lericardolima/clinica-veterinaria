const Message = require("../api/example/models/message").Message;
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const should = chai.should();

chai.use(chaiHttp);

describe("GET message", () => {
    it("Should get a message", (done) => {
      chai
        .request(app)
        .get("/message")
        .end((error, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          done();
        });
    });
  });
  