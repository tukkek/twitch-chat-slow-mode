# Twitch chat slow-mode

Twitch chat is absolutely useless past a certain point, like for streams with dozens of thousands of viewers constantly spamming messages. This user-script:

- Slows messages to one every 3 seconds.
- Ignores messages longer than a tweet.

The idea is that there is nothing of value lost by reducing message volume - even mass reactions such as emotes and *???????* can be captured by selecting a random message. Nothing of value is lost by ignoring people writing unreadeable essays that will stay on-screen for half a second.

This way, you retain all of the chat value while still being able to read the occasional insightful, funny or clever message someone may type without the extreme spam.

## Usage

1. Instlal an user-scrpt manager such as [Tampermonkey](https://www.tampermonkey.net/).
2. Install this user-script.
3. Open any Twitch channel chat via the "pop out chat" menu option.

If the user-script is working you will see a message saying "Slow mode active".
