import Entity from '~/core/Entity';
import type Renderer from '~/core/Renderer';
import { CKinetic2D, CTransform2D } from '~/components';
import { Vector2D } from '~/maths';

/**
 * Moves an entities position via kinetic forces.
 * Entities must have CKinetic2D and CTransform2D components.
 * @param entities - An array of entities.
 * @param renderer - The renderer to use.
 */
export default function kinetic2D(entities: Entity[], renderer: Renderer) {
  entities.forEach(entity => {
    if (!entity.hasComponents('kinetic2d', 'transform2d')) return;

    const transform = entity.getComponent<CTransform2D>('transform2d');
    const kinetic = entity.getComponent<CKinetic2D>('kinetic2d');

    kinetic.velocity = Vector2D.add(kinetic.velocity, kinetic.acceleration);
    transform.position = Vector2D.add(transform.position, kinetic.velocity);
  });
}