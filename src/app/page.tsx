import styles from "../styles/pages/page.module.css";
import WebhookPreview from "./components/WebhookPreview";

export default function Home() {
  const WebhookPreviewProps = {
    content: "test content",
    embeds: [
      {
        title: "test body title",
        description: "test description",
        color: "#f79f7b",
        fields: [
          {
            name: "field name",
            value: "field value"
          }
        ],
        author: {
          name: "test author",
          icon_url: "https://i.imgur.com/YdplMiw.png"
        },
        footer: {
          text: "footer",
          icon_url: "https://placehold.co/100x100/000/f79f7b"
        },
        timestamp: "2025-01-07T20:31:00.000Z",
        image: {
          url: "https://placehold.co/600x400/000/f79f7b"
        },
        thumbnail: {
          url: "https://placehold.co/200x100/000/f79f7b"
        }
      }
    ],
    username: "salut",
    avatar_url: "https://i.imgur.com/YdplMiw.png",
    attachments: []
  };
  
  return (
    <div className={styles.page}>
      <h1>Discord webhook generator</h1>
      <main>
        <WebhookPreview {...WebhookPreviewProps} />
      </main>
      <p>Fait avec passion par <a href="https://github.com/RetrozDev">Retroz</a></p>
    </div>
  );
}
