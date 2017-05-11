import {AnimationService} from './animations';

describe('AnimationService', () => {
  let animations;
  let animationService;

  beforeEach(() => {
    animations = [];
    animationService = new AnimationService();
  });

  it('should add an animation to the list', () => {
    const res = animationService.addAnimation({animation:'animation'}, animations);
    expect(res.length).toEqual(1);
    expect(res[0].id).toEqual(0);
  });

  it('should delete an animation', () => {
    const res = animationService.deleteAnimation(0, animations);
    expect(res.length).toEqual(0);
  });
});
