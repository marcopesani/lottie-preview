export class AnimationService {
  addAnimation(json, animations) {
    return [
      {
        id: (animations.length === 0) ? 0 : animations[0].id + 1,
        animation: json
      }
    ].concat(animations);
  }

  deleteAnimation(id, animations) {
    return animations.filter(animation => animation.id !== id);
  }
}