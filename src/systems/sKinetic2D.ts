import Entity from '~/core/Entity';
import { CKinetic2D, CTransform2D } from '~/components';
import { Vector2D } from '~/maths';

/**
 * Moves an entities position via kinetic forces.
 * Entities must have CKinetic2D and CTransform2D components.
 * @param entities - An array of entities.
 */
export default function sKinetic2D(entities: Entity[]) {
  entities.forEach(entity => {
    if (!entity.hasComponents('CKinetic2D', 'CTransform2D')) return;

    const kinetic = entity.getComponent<CKinetic2D>('CKinetic2D');
    const transform = entity.getComponent<CTransform2D>('CTransform2D');

    kinetic.velocity = Vector2D.add(kinetic.velocity, kinetic.acceleration);
    transform.position = Vector2D.add(transform.position, kinetic.velocity);
  });
}