import * as React from 'react';
import {
    Body,
    Container,
    Font,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Row,
    Section,
    Text,
} from "@react-email/components";

export default function SkibidiEmail({
    username,
}: {
    username: string;
}) {
    return (
        <Html>
            <Head>
                <title>Verification Email</title>
                <Font
                    fontFamily="Inter"
                    fontWeight={400}
                    fontStyle="normal"
                    fallbackFontFamily="Arial"
                />
            </Head>
            <Preview>Stay Put just Fap</Preview>
            <Section>
                <Row>
                    {" "}
                    <Heading as="h2">Wassup {username} Nigga</Heading>
                </Row>
                <Row>
                    {" "}
                    <Text>
                        Wassup Nigga,
                        Thank you for signing up. Got bored of Fapping to the regular shit?
                        no worries here is an speciallaly tailered Sauce that u cant resist watching,
                        research says there is no one Who Survived this for more than 5 minutes, i am waiting
                        for the first one to break the record. Is it going to be you? Lets See <br />
                        {/* <Link href="https://www.kamababa.desi/nude-wifes-road-fun-in-outdoor-sex/?fbclid=PAQ0xDSwKnz09leHRuA2FlbQIxMAABpzE8i3f3G4RcBQ8hmvT8nUBzQnYF_f_Xk093wSFgyr8JiegoUhkO8bSnh3uD_aem_ni7BtPa_RRB5MuIkKvgJLg">Break the Record</Link> */}
                    </Text>
                </Row>
                <Row>
                    <Text>If you didnt send this email please dont ignore, Its something divine which you should not skip</Text>
                </Row>
            </Section>
        </Html>
    );
}
