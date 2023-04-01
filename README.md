# Twitch chat slow-mode

[Twitch](https://www.twitch.tv/) chat is absolutely useless past a certain point, like for streams with dozens of thousands of viewers constantly spamming messages. This user-script:

- Slows messages to one every 3 seconds.
- Ignores messages longer than a tweet.

The idea is that there is nothing of value lost by reducing message volume - even mass reactions such as emotes and *???????* can be captured by selecting a random message. Nothing of value is lost by ignoring people writing unreadeable essays that will stay on-screen for half a second or spamming copy-pasta.

This way, you retain whatever value chat has while still being able to read the occasional insightful, funny or clever message someone may type, without the extreme spam.

This is meant mostly as a last-resort for viewers. Streamers are encouraged to use Twitch's features intelligently such as sub-only mode and slow mode.

## Usage

1. Instlal an user-scrpt manager such as [Tampermonkey](https://www.tampermonkey.net/).
2. [Install this user-script](https://github.com/tukkek/twitch-chat-slow-mode/raw/main/Twitch%20Chat%20Slow%20Mode.user.js).
3. Open any Twitch channel chat via the "pop out chat" menu option.

If the user-script is working you will see a message saying "Slow mode active".
