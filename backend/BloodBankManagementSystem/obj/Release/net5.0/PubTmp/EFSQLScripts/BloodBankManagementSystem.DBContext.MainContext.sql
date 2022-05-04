IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220502144624_dheeraj')
BEGIN
    CREATE TABLE [Admins] (
        [AdminID] nvarchar(450) NOT NULL,
        [AdminPassword] nvarchar(max) NULL,
        [Message] nvarchar(max) NULL,
        CONSTRAINT [PK_Admins] PRIMARY KEY ([AdminID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220502144624_dheeraj')
BEGIN
    CREATE TABLE [BloodBanks] (
        [BloodBankID] int NOT NULL IDENTITY,
        [UserID] int NOT NULL,
        [Password] int NOT NULL,
        [BloodBankName] nvarchar(max) NULL,
        [Address] nvarchar(max) NULL,
        [ContactNumber] nvarchar(max) NULL,
        [City] nvarchar(max) NULL,
        CONSTRAINT [PK_BloodBanks] PRIMARY KEY ([BloodBankID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220502144624_dheeraj')
BEGIN
    CREATE TABLE [BloodDonationCamps] (
        [BloodDonationCampID] int NOT NULL IDENTITY,
        [CampName] nvarchar(max) NOT NULL,
        [Adress] nvarchar(max) NULL,
        [City] nvarchar(max) NULL,
        [BloodBankID] int NOT NULL,
        [CampStartDate] datetime2 NOT NULL,
        [CampEndDate] datetime2 NOT NULL,
        CONSTRAINT [PK_BloodDonationCamps] PRIMARY KEY ([BloodDonationCampID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220502144624_dheeraj')
BEGIN
    CREATE TABLE [BloodDonorDonations] (
        [BloodDonationID] int NOT NULL IDENTITY,
        [BloodDonorID] int NOT NULL,
        [BloodDonationDate] datetime2 NOT NULL,
        [NumberofBottles] int NOT NULL,
        [Weight] int NOT NULL,
        [HBCount] int NOT NULL,
        [BloodGroup] nvarchar(max) NULL,
        [BloodBankID] int NOT NULL,
        [ExpiryDate] datetime2 NOT NULL,
        CONSTRAINT [PK_BloodDonorDonations] PRIMARY KEY ([BloodDonationID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220502144624_dheeraj')
BEGIN
    CREATE TABLE [Blooddonors] (
        [BloodDonorID] int NOT NULL IDENTITY,
        [FirstName] nvarchar(max) NULL,
        [LastName] nvarchar(max) NULL,
        [Address] nvarchar(max) NULL,
        [City] nvarchar(max) NULL,
        [MobileNo] nvarchar(max) NULL,
        [BloodGroup] nvarchar(max) NULL,
        CONSTRAINT [PK_Blooddonors] PRIMARY KEY ([BloodDonorID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220502144624_dheeraj')
BEGIN
    CREATE TABLE [bloods] (
        [Funkey] int NOT NULL IDENTITY,
        [BloodBankID] int NOT NULL,
        [BloodGroup] nvarchar(max) NULL,
        [NumberOfBottles] int NOT NULL,
        CONSTRAINT [PK_bloods] PRIMARY KEY ([Funkey])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220502144624_dheeraj')
BEGIN
    CREATE TABLE [Hospital] (
        [HospitalID] int NOT NULL IDENTITY,
        [HospitalName] nvarchar(max) NULL,
        [Address] nvarchar(max) NULL,
        [City] nvarchar(max) NULL,
        [ContactNo] nvarchar(max) NULL,
        [BloodBankID] int NOT NULL,
        CONSTRAINT [PK_Hospital] PRIMARY KEY ([HospitalID])
    );
END;
GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20220502144624_dheeraj')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20220502144624_dheeraj', N'5.0.13');
END;
GO

COMMIT;
GO

