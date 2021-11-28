import React, { createRef } from "react"
import MailchimpSubscribe from "react-mailchimp-subscribe"

const url = "https://spotsr.us20.list-manage.com/subscribe/post?u=1ca2bcfc0932736660c52cce7&amp;id=7272424aeb"

const MailChimpForm = () => {
    const emailRef = createRef(undefined)

    return (
        
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => {
                    switch (status) {
                        case "sending":
                            return <div className = "subscribed opensans-normal-cinder-18px">Please wait a moment....</div>
                        case "success":
                            return <div className = "subscribed opensans-normal-cinder-18px">Thank you for joining our waitlist. We look forward to welcoming you <b>first</b> to our platform once we launch!</div>
                        case "error":
                            return <div dangerouslySetInnerHTML={{ __html: message }} />
                        default:
                            return (
                                <form className="js-validate w-lg-80 mx-lg-auto" onSubmit={(event) => {
                                    event.preventDefault()

                                    subscribe({
                                        EMAIL: emailRef.current.value,
                                    })
                                }}>
                                <div className="form" data-id="146:2440">
                        <input type = "email" ref = {emailRef} className="form-fields-text-input input-with-hidd-n-label-desktop  opensans-normal-cinder-18px" data-id="I146:2441;92:1489" placeholder = "Enter your E-mail" />
                      <button type = "submit" className="hero-sections-submit-button-1 text-1" data-id="146:2442">
                        Notify Me
                      </button>
        </div>
        <p className="notice" data-id="146:2443">Join the Waitlist and get 1 year free membership!</p>

                                </form>
                            )
                    }
                }}
            />
        
    )
}

export { MailChimpForm }