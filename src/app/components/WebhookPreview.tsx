import style from "../../styles/components/WebhookPreview.module.css";
import type { WebhookPreviewType } from "../../types/WebhookPreviewType";

export default function WebhookPreview(props: WebhookPreviewType) {
	const now: Date = new Date();
	const currentHour: number = now.getHours();
	const currentMinute: number = now.getMinutes();
	const CurrentTime: string = `${currentHour < 10 ? `0${currentHour}` : currentHour}:${currentMinute < 10 ? `0${currentMinute}` : currentMinute}`;

	return (
		<div className={style.WebhookPreview}>
			<div className={style.author}>
				<img src={props.avatar_url} alt={props.username} />
				<p>
					{props.username} <span>BOT</span>
				</p>
				<p>Aujourd'hui à {CurrentTime}</p>
			</div>
            <p className={style.content}>{props.content}</p>
			{props.embeds.map((embed, index) => (
				<div
					key={index}
					className={style.embed}
					style={{ borderLeft: `4px solid ${embed.color}` }}
				>
					{embed.author && (
						<div className={style.embedAuthor}>
							<img src={embed.author?.icon_url} alt={embed.author?.name} />
							<p>{embed.author.name}</p>
						</div>
					)}
				</div>
			))}
		</div>
	);
}
