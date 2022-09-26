// 1. Create a TV class with properties like brand, channel, volume and operating system.
// Specify brand in a constructor parameter. Channel should be 1 by default. Volume should be 50 by default.
// The operating system can be set in the constructor but is not changeable afterwards (make sure it’s not changeable but user can read this value).
// 2. Add methods to increase and decrease volume. Volume can't never be below 0 or above 100.
// 3. Add a method to set the channel. Let's say the TV has only 50 channels so if you try to set
// channel 60 the TV will stay at the current channel.
// 4. Add a method to reset TV so it goes back to channel 1 and volume 50. (Hint: consider using it
// from the constructor).
// 5. It's useful to write a status, that returns info about the TV status like: "Panasonic at channel 8,
// volume 75".

class Tv {
  #system;
  constructor(brand, channel = 1, volume = 50, system) {
    this.brand = brand;
    this.channel = channel;
    this.volume = volume;
    this.#system = system;
  }

  increaseVolume(vol) {
    if (this.volume < 100) {
      this.volume++;
    } else {
      console.log("Max volume is 100");
    }
  }

  decreaseVolume(vol) {
    if (this.volume > 0) {
      this.volume--;
    } else {
      console.log("Min volume is 0");
    }
  }

  setChannel(channel) {
    if (channel > 50) {
      alert("There is only 50 channels");
    } else {
      this.channel = channel;
    }
  }

  reset(channel = 1, volume = 50) {
    this.channel = channel;
    this.volume = volume;
  }

  get system() {
    return this.#system;
  }

  status() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }
}

const tv = new Tv("LG", "Android", 60, 90);
console.log(tv);

tv.increaseVolume();
tv.decreaseVolume();
tv.setChannel(32);
tv.status();

console.log(tv.volume);
console.log(tv.channel);

tv.reset();
console.log(tv);
tv.status();
