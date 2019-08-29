
import { LoremIpsum } from "lorem-ipsum";
import uuid from "uuid/v1";
import {chain, random, slice} from "lodash";

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

const names = [
    'Kate',
    'John',
    'Jane',
    'Albert',
    'Brandon',
    'Oliver',
    'Charlie',
    'Thomas',
    'Olivia',
    'Elizabeth',
    'Ava'
];

export const getMessage = (idx) => ({
    id: uuid(),
    title: `Message ${idx}`,
    from: names[random(0, names.length -1)],
    text: lorem.generateSentences(random(1,5))
});


export const getMessageTranslationData = (messages) => {
    const maxMessages = 10;
    const authorsUniq = chain(messages).map('from').uniq().value();
    const authorsText = authorsUniq.join(', ');
    const authorsHead = slice(authorsUniq,0,2);
    const authorsTail = slice(authorsUniq,2);
    const authorsTailCount = authorsTail.length;
    const authorsHeadTxt = authorsHead.join(', ');
    const authorsTailTxt = authorsTail[0];
    const authorsCount = authorsUniq.length;
    return {
        messageCount: messages.length,
        messageCountType: messages.length < maxMessages ? 'normal' : 'max',
        maxMessages,
        authorsCount,
        authorsText,
        authorsTailCount,
        authorsHeadTxt,
        authorsTailTxt
    };
};