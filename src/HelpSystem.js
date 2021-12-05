import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
    Badge,
    Button,
    Media,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    UncontrolledAccordion
} from 'reactstrap';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class HelpSystem extends React.Component {


    render() {
        let open = this.props.open;
        let toggleHelp = this.props.toggleHelp;
        return (
            <Modal fullscreen isOpen={open} size={"lg"}>
                <ModalHeader toggle={toggleHelp} fullscreen>
                    Help
                </ModalHeader>
                <ModalBody fullscreen>
                    <UncontrolledAccordion defaultOpen="1">
                        <AccordionItem>
                            <AccordionHeader targetId="1">
                                Getting Started
                            </AccordionHeader>
                            <AccordionBody accordionId="1">
                                Each of the principles can
                                be <strong>'Good'</strong> , <strong>'Medium'</strong> or <strong>'Bad'.</strong> <br/>
                                Don't think too much about what those things mean.<br/>
                                Click on a principle of your choice and select the evaluation <strong>you think is
                                right</strong>.<br/>
                                <Media src="/InitialClick.gif" rounded/> <br/><br/>
                                Continue until you get an accurate image of your company, like on the picture
                                below: <br/>
                                <Media src="/worse.png" rounded style={{width: 300}}/> <br/><br/>
                                <strong>Share the result</strong> with your coworkers and think what can you do to
                                improve the situation. <br/><br/>

                                If you press the <Badge color="warning">Save</Badge> button, your analysis will be
                                stored <strong>locally on your computer</strong>, in your browser local storage, and
                                will be reloaded next time you launch this page.<br/>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem accordionId="2">
                            <AccordionHeader targetId="2">
                                Working Fast(er) - Key Shortcuts
                            </AccordionHeader>
                            <AccordionBody accordionId="2">
                                Hover any principle you want to change, and press one of the buttons:
                                <ul>
                                    <li><Badge color="success">3</Badge> to set the color green, which means 'Good'</li>
                                    <li><Badge color="warning">2</Badge> to set the color green, which means 'Medium'
                                    </li>
                                    <li><Badge color="danger">1</Badge> to set the color red, which means 'Bad'</li>
                                    <li><Badge color="light"><code>4</code></Badge>/<Badge color="light"><code>0</code></Badge> to
                                        leave the principle clear
                                    </li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="3">
                                Saving Your Work
                            </AccordionHeader>
                            <AccordionBody accordionId="3">
                                If you press the <Badge color="warning">Save</Badge> button, your analysis will be
                                stored <strong>locally on your computer</strong>, in your browser local storage, and
                                will be reloaded next time you launch this page.<br/><br/>

                                You can download the result as a JSON file, which then you can share, archive
                                or <code>Load</code> again. Just press the <code>Load</code> button and select the
                                previously downloaded JSON file.

                                You can also download the result as a PNG file, which you can share with your coworkers,
                                too. This is useful if you have any existing mechanism for your documentation (wiki,
                                Notion, Evernote, etc). <br/><br/>

                                Bear in mind that only the <Badge color="warning">Save</Badge> button ensures your
                                assessment will be automagically loaded during your next visit.
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="4">
                                Privacy Policy & ToS
                            </AccordionHeader>
                            <AccordionBody accordionId="4">
                                <strong>
                                    Terms of Service
                                </strong>
                                <ul>
                                    <li>This page, doctrine.wardleymaps.com, is run by me, <a
                                        href="https://twitter.com/wardleymaps">Krzysztof Daniel</a>, and it is my pet
                                        project.
                                    </li>
                                    <li>I deliver it AS-IS, without any promises.</li>
                                </ul>
                                <strong>
                                    Privacy Policy
                                </strong>
                                <ul>
                                    <li>Google Analytics is plugged into this webpage, and gathers anonymous information
                                        about the traffic.
                                    </li>
                                    <li>With the exception of Google Analytics, no other data is saved or sent anywhere,
                                        everything happens in your browser.
                                    </li>
                                    <li>You are free to audit the code <a
                                        href="https://github.com/cdaniel/doctrine/">here</a>.
                                    </li>
                                </ul>
                            </AccordionBody>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionHeader targetId="5">
                                Support
                            </AccordionHeader>
                            <AccordionBody accordionId="5">
                                Drop me a line <a href="https://twitter.com/wardleymaps">here</a>.
                            </AccordionBody>
                        </AccordionItem>
                    </UncontrolledAccordion>
                </ModalBody>
                <ModalFooter fullscreen>
                    <Button
                        color="primary"
                        onClick={toggleHelp}
                    >
                        Close
                    </Button>
                </ModalFooter>
            </Modal>
        );
    };
}

export default HelpSystem;
