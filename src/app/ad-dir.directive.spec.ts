import { AdDirDirective } from './ad-dir.directive';
import { TestViewContainerRef } from './ad-directive-test-class';

describe('AdDirDirective', () => {
  it('should create an instance', () => {
    const directive = new AdDirDirective(new TestViewContainerRef());
    expect(directive).toBeTruthy();
  });
});
