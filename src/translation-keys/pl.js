const FROM = "Od: {from}";
const MESSAGE_SUMMARY_1 =  "Masz nowe wiadomości";
const MESSAGE_SUMMARY_2 = "Masz {messageCount} nowe wiadomości";
const MESSAGE_SUMMARY_3 = "Masz {messageCount, plural, one {# nową wiadomość} other {# nowych wiadomości}}";
const MESSAGE_SUMMARY_4 = "{messageCountType, select, " +
    "normal {" +
    "{messageCount, plural," +
    "=0 {Nie masz nowych wiadomości} " +
    "one {Masz {messageCount} nową wiadomość} " +
    "other {Masz {messageCount} nowych wiadomości}}} other {Masz {maxMessages}+ nowych wiadomości}" +
    "}";
const FROM_1 = "od {authorsText}";
const FROM_2 = "{authorsCount, plural, =0 {} other {od {authorsText}}}";
const FROM_3 = "{authorsCount, plural, " +
    "=0 {} " +
    "=1 {od {authorsHeadTxt}} " +
    "=2 {od {authorsHeadTxt}} " +
    "=3 {od {authorsHeadTxt} i {authorsTailTxt}} " +
    "other {od {authorsHeadTxt} i {authorsTailCount} innych}" +
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
}