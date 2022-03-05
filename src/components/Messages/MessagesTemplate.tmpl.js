import messageTemplate from "./MessageTemplate.tmpl";

const messagesTemplate = `<ul class="messages">
[[@list-of ${messageTemplate} from messages]]
</ul>`;

export default messagesTemplate;
