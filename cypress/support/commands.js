// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

//working with iframes
Cypress.Commands.add("iframe", { prevSubject: "element" }, $iframe => {
    Cypress.log({
      name: "iframe",
      consoleProps() {
        return {
          iframe: $iframe,
        };
      },
    });
    return new Cypress.Promise(resolve => {
      onIframeReady(
        $iframe,
        () => {
          resolve($iframe.contents().find("body"));
        },
        () => {
          $iframe.on("load", () => {
            resolve($iframe.contents().find("body"));
          });
        }
      );
    });
  });
  
  function onIframeReady($iframe, successFn, errorFn) {
    try {
      const iCon = $iframe.first()[0].contentWindow,
        bl = "about:blank",
        compl = "complete";
      const callCallback = () => {
        try {
          const $con = $iframe.contents();
          if ($con.length === 0) {
            // https://git.io/vV8yU
            throw new Error("iframe inaccessible");
          }
          successFn($con);
        } catch (e) {
          // accessing contents failed
          errorFn();
        }
      };
      const observeOnload = () => {
        $iframe.on("load.jqueryMark", () => {
          try {
            const src = $iframe.attr("src").trim(),
              href = iCon.location.href;
            if (href !== bl || src === bl || src === "") {
              $iframe.off("load.jqueryMark");
              callCallback();
            }
          } catch (e) {
            errorFn();
          }
        });
      };
      if (iCon.document.readyState === compl) {
        const src = $iframe.attr("src").trim(),
          href = iCon.location.href;
        if (href === bl && src !== bl && src !== "") {
          observeOnload();
        } else {
          callCallback();
        }
      } else {
        observeOnload();
      }
    } catch (e) {
      // accessing contentWindow failed
      errorFn();
    }
  }
  
  Cypress.Commands.add('resolve', { prevSubject: 'optional' }, (subject, fn, opts={}) => {
    const resolve = () => {
      fn(subject).then(res => cy.verifyUpcomingAssertions(res, opts, { onRetry: resolve }))
    }
    return resolve();
  });

  
//log in by form function
Cypress.Commands.add("loginByForm", (email, password) => {

  Cypress.log({
    name: 'loginByForm',
    message: email + ' | ' + password
  })

  return cy.request({
    method: 'POST',
    url: "https://app.prod.trainsmart.com/services/user_session",
    //form: true,
    body: {
      username: email,
      password: password,
      rememberme: true

    }
  })
})
