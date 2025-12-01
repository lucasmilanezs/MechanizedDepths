# JadeEvents.onClientRegistration

## Basic info

- Valid script types: [CLIENT]

- Has result? ✘

- Event class: WailaClientRegistrationEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| progress | ResourceLocation |  | ClientExtensionProviderBuilder<CompoundTag, ProgressView> | ✘ |
| block | ResourceLocation, Class<? extends Block> |  | BlockComponentProviderBuilder | ✘ |
| itemStorage | ResourceLocation |  | ClientExtensionProviderBuilder<ItemStack, ItemView> | ✘ |
| entity | ResourceLocation, Class<? extends Entity> |  | EntityComponentProviderBuilder | ✘ |
| addConfig | ResourceLocation, String, Predicate<String> |  | void | ✘ |
| addConfig | ResourceLocation, boolean |  | void | ✘ |
| addConfig | ResourceLocation, Enum<?> |  | void | ✘ |
| addConfig | ResourceLocation, float, float, float, boolean |  | void | ✘ |
| addConfig | ResourceLocation, int, int, int, boolean |  | void | ✘ |
| shouldHide | Entity |  | boolean | ✘ |
| shouldHide | BlockState |  | boolean | ✘ |
| energyStorage | ResourceLocation |  | ClientExtensionProviderBuilder<CompoundTag, EnergyView> | ✘ |
| fluidStorage | ResourceLocation |  | ClientExtensionProviderBuilder<CompoundTag, FluidView> | ✘ |
| addItemModNameCallback | int, JadeItemModNameCallback |  | void | ✘ |
| addItemModNameCallback | JadeItemModNameCallback |  | void | ✘ |
| isShowDetailsPressed |  |  | boolean | ✘ |
| markAsClientFeature | ResourceLocation |  | void | ✘ |
| registerCustomEnchantPower | Block, CustomEnchantPower |  | void | ✘ |
| addBeforeRenderCallback | JadeBeforeRenderCallback |  | void | ✘ |
| addBeforeRenderCallback | int, JadeBeforeRenderCallback |  | void | ✘ |
| registerEntityComponent | IEntityComponentProvider, Class<? extends Entity> |  | void | ✘ |
| registerProgressClient | IClientExtensionProvider<CompoundTag, ProgressView> |  | void | ✘ |
| registerBlockComponent | IBlockComponentProvider, Class<? extends Block> |  | void | ✘ |
| addRayTraceCallback | int, JadeRayTraceCallback |  | void | ✘ |
| addRayTraceCallback | JadeRayTraceCallback |  | void | ✘ |
| addTooltipCollectedCallback | int, JadeTooltipCollectedCallback |  | void | ✘ |
| addTooltipCollectedCallback | JadeTooltipCollectedCallback |  | void | ✘ |
| registerItemStorageClient | IClientExtensionProvider<ItemStack, ItemView> |  | void | ✘ |
| registerAccessorHandler | Class<T extends Accessor<?>>, Accessor.ClientHandler<T extends Accessor<?>> |  | void | ✘ |
| createPluginConfigScreen | Screen, String |  | Screen | ✘ |
| registerFluidStorageClient | IClientExtensionProvider<CompoundTag, FluidView> |  | void | ✘ |
| registerEnergyStorageClient | IClientExtensionProvider<CompoundTag, EnergyView> |  | void | ✘ |
| addAfterRenderCallback | int, JadeAfterRenderCallback |  | void | ✘ |
| addAfterRenderCallback | JadeAfterRenderCallback |  | void | ✘ |
| addRenderBackgroundCallback | int, JadeRenderBackgroundCallback |  | void | ✘ |
| addRenderBackgroundCallback | JadeRenderBackgroundCallback |  | void | ✘ |
| markAsServerFeature | ResourceLocation |  | void | ✘ |
| hideTarget | Block |  | void | ✘ |
| hideTarget | EntityType<?> |  | void | ✘ |
| shouldPick | Entity |  | boolean | ✘ |
| shouldPick | BlockState |  | boolean | ✘ |
| addConfigListener | ResourceLocation, Consumer<ResourceLocation> |  | void | ✘ |
| entityAccessor |  |  | Builder | ✘ |
| usePickedResult | EntityType<?> |  | void | ✘ |
| usePickedResult | Block |  | void | ✘ |
| blockAccessor |  |  | Builder | ✘ |
| registerEntityIcon | IEntityComponentProvider, Class<? extends Entity> |  | void | ✘ |
| registerBlockIcon | IBlockComponentProvider, Class<? extends Block> |  | void | ✘ |
| setServerData | CompoundTag |  | void | ✘ |
| getBlockCamouflage | LevelAccessor, BlockPos |  | ItemStack | ✘ |
| isServerConnected |  |  | boolean | ✘ |
| maybeLowVisionUser |  |  | boolean | ✘ |
| isClientFeature | ResourceLocation |  | boolean | ✘ |
| getAccessorHandler | Class<? extends Accessor<?>> |  | Accessor.ClientHandler<Accessor<?>> | ✘ |
| getServerData |  |  | CompoundTag | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
JadeEvents.onClientRegistration((event) => {
	// This space (un)intentionally left blank
});
```

