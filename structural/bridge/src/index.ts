interface MediaPlayerImplementation {
  playAudio(): void;
  playVideo(): void;
}

class WindowsMediaPlayer implements MediaPlayerImplementation {
  playAudio(): void {
    console.log("Playing Windows Audio");
  }

  playVideo(): void {
    console.log("Playing Windows Video");
  }
}

class MacMediaPlayer implements MediaPlayerImplementation {
  playAudio(): void {
    console.log("Playing MacOS Audio");
  }

  playVideo(): void {
    console.log("Playing MacOS Video");
  }
}

abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}

  abstract playFile(): void;
}

class AudioPlayer extends MediaPlayerAbstraction {
  playFile(): void {
    this.implementation.playAudio();
  }
}

class VideoPlayer extends MediaPlayerAbstraction {
  playFile(): void {
    this.implementation.playVideo();
  }
}

let windowsMediaPlayer = new WindowsMediaPlayer();
let player = new AudioPlayer(windowsMediaPlayer);
