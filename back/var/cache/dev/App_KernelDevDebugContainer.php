<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerTtaHea0\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerTtaHea0/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerTtaHea0.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerTtaHea0\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerTtaHea0\App_KernelDevDebugContainer([
    'container.build_hash' => 'TtaHea0',
    'container.build_id' => '0fbd2a63',
    'container.build_time' => 1593680581,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerTtaHea0');
