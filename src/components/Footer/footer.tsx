
interface FooterProps {

}
export function Footer(props : FooterProps){
    return(
            <footer className=" mt-20">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/3 flex justify-between lg:justify-normal gap-24 mb-10 lg:mb-0">
                        <div>
                            <h3 className="font-bold mb-3">About</h3>
                            <ul className="flex flex-col gap-3">
                                <li>Blog</li>
                                <li>Meet the Team</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="">
                            <h3 className="font-bold mb-3 ">Support</h3>
                            <ul className="flex flex-col gap-3">
                                <li>Contact Us</li>
                                <li>Shipping</li>
                                <li>Return</li>
                                <li>FAQ</li>
                            </ul>
                        </div>



                       
                    </div>
                    <div className="lg:place-self-end">redes socias</div>
                </div>

                <div className="mt-20 flex flex-col gap-3 items-center justify-center pb-5 lg:flex-row lg:justify-between">
                    <p>Copyright @ 2024. All rights Reserved</p>
                    <div className="flex gap-5">
                        <p>Terms of Service</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </footer>
    )
}

