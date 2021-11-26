```
ALTER TABLE `users`  ADD COLUMN `onboardingStatusId` INT NULL AFTER `remember_token`;
ALTER TABLE `users` ADD COLUMN `additional_name` VARCHAR(45) NULL AFTER `onboardingStatusId`;
```