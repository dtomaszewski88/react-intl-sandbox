const FROM = "From: {from}";
const MESSAGE_SUMMARY_1 =  "You have new messages";
const MESSAGE_SUMMARY_2 = "You have {messageCount} new messages";
const MESSAGE_SUMMARY_3 = "You have {messageCount, plural, one {# new message} other {# new messages}}";
const MESSAGE_SUMMARY_4 = "You have {messageCountType, select, " +
    "normal {" +
    "{messageCount, plural," +
    "=0 {no new messages} " +
    "one {{messageCount} new message} " +
    "other {{messageCount} new messages}}" +
    "} " +
    "other {{maxMessages}+ new messages}" +
    "}";
const FROM_1 = "from {authorsText}";
const FROM_2 = "{authorsCount, plural, =0 {} other {from {authorsText}}}";
const FROM_3 = "{authorsCount, plural, " +
    "=0 {} " +
    "=1 {from {authorsHeadTxt}} " +
    "=2 {from {authorsHeadTxt}} " +
    "=3 {from {authorsHeadTxt} and {authorsTailTxt}} " +
    "other {from {authorsHeadTxt} and {authorsTailCount} others}" +
    "}";
const MESSAGE_SUMMARY_5 = MESSAGE_SUMMARY_3 + ' ' + FROM_1;
const MESSAGE_SUMMARY_6 = MESSAGE_SUMMARY_3 + ' ' + FROM_2;
const MESSAGE_SUMMARY_7 = MESSAGE_SUMMARY_3 + ' ' + FROM_3;

export default {
  FROM,
  MESSAGE_SUMMARY_1,
  MESSAGE_SUMMARY_2,
  MESSAGE_SUMMARY_3,
  MESSAGE_SUMMARY_4,
  MESSAGE_SUMMARY_5,
  MESSAGE_SUMMARY_6,
  MESSAGE_SUMMARY_7,
  'Translations demo': 'Translations demo'
}