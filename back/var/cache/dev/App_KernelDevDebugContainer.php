<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerRxBLjA6\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerRxBLjA6/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerRxBLjA6.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerRxBLjA6\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerRxBLjA6\App_KernelDevDebugContainer([
    'container.build_hash' => 'RxBLjA6',
    'container.build_id' => '03b0b176',
    'container.build_time' => 1593781598,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerRxBLjA6');
