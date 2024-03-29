USE [AppIdentityDb]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 4/28/2022 11:47:02 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoleClaims]    Script Date: 4/28/2022 11:47:03 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoleClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoleClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetRoles]    Script Date: 4/28/2022 11:47:03 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetRoles](
	[Id] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](256) NULL,
	[NormalizedName] [nvarchar](256) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetRoles] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserClaims]    Script Date: 4/28/2022 11:47:03 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserClaims](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserId] [nvarchar](450) NOT NULL,
	[ClaimType] [nvarchar](max) NULL,
	[ClaimValue] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserClaims] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserLogins]    Script Date: 4/28/2022 11:47:03 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserLogins](
	[LoginProvider] [nvarchar](450) NOT NULL,
	[ProviderKey] [nvarchar](450) NOT NULL,
	[ProviderDisplayName] [nvarchar](max) NULL,
	[UserId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserLogins] PRIMARY KEY CLUSTERED 
(
	[LoginProvider] ASC,
	[ProviderKey] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserRoles]    Script Date: 4/28/2022 11:47:03 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserRoles](
	[UserId] [nvarchar](450) NOT NULL,
	[RoleId] [nvarchar](450) NOT NULL,
 CONSTRAINT [PK_AspNetUserRoles] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUsers]    Script Date: 4/28/2022 11:47:03 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUsers](
	[Id] [nvarchar](450) NOT NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[FullName] [nvarchar](max) NULL,
	[DateOfBirth] [datetime2](7) NOT NULL,
	[JoinedDate] [datetime2](7) NOT NULL,
	[Gender] [nvarchar](max) NULL,
	[Type] [nvarchar](max) NULL,
	[CodeStaff] [nvarchar](max) NULL,
	[Location] [nvarchar](max) NULL,
	[Disable] [bit] NOT NULL,
	[UserName] [nvarchar](256) NULL,
	[NormalizedUserName] [nvarchar](256) NULL,
	[Email] [nvarchar](256) NULL,
	[NormalizedEmail] [nvarchar](256) NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [nvarchar](max) NULL,
	[SecurityStamp] [nvarchar](max) NULL,
	[ConcurrencyStamp] [nvarchar](max) NULL,
	[PhoneNumber] [nvarchar](max) NULL,
	[PhoneNumberConfirmed] [bit] NOT NULL,
	[TwoFactorEnabled] [bit] NOT NULL,
	[LockoutEnd] [datetimeoffset](7) NULL,
	[LockoutEnabled] [bit] NOT NULL,
	[AccessFailedCount] [int] NOT NULL,
	[LastModified] [datetime2](7) NOT NULL,
 CONSTRAINT [PK_AspNetUsers] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[AspNetUserTokens]    Script Date: 4/28/2022 11:47:03 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[AspNetUserTokens](
	[UserId] [nvarchar](450) NOT NULL,
	[LoginProvider] [nvarchar](450) NOT NULL,
	[Name] [nvarchar](450) NOT NULL,
	[Value] [nvarchar](max) NULL,
 CONSTRAINT [PK_AspNetUserTokens] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[LoginProvider] ASC,
	[Name] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20211116052859_initdata', N'5.0.12')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20211125010416_addModifiedDate', N'5.0.12')
GO
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'2f17ffc3-d2be-494f-bdeb-0b80a5dbf75d', N'Admin', N'ADMIN', N'91e47490-405a-4143-afe1-bb942edbf320')
INSERT [dbo].[AspNetRoles] ([Id], [Name], [NormalizedName], [ConcurrencyStamp]) VALUES (N'cdfaf085-01a8-43dc-b3ee-a3ef1a752742', N'Staff', N'STAFF', N'abe3b1d3-f6b3-407e-9dde-664052927062')
GO
SET IDENTITY_INSERT [dbo].[AspNetUserClaims] ON 

INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (13, N'5ec724d4-99b1-4d85-b519-308d4e028b83', N'location', N'HN')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (14, N'5ec724d4-99b1-4d85-b519-308d4e028b83', N'role', N'Staff')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (15, N'5ec724d4-99b1-4d85-b519-308d4e028b83', N'family_name', N'Doe')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (16, N'5ec724d4-99b1-4d85-b519-308d4e028b83', N'given_name', N'John')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (21, N'674354ef-cde8-4f4a-96db-316857d0387c', N'location', N'HN')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (22, N'674354ef-cde8-4f4a-96db-316857d0387c', N'role', N'Staff')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (23, N'674354ef-cde8-4f4a-96db-316857d0387c', N'family_name', N'Doe')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (24, N'674354ef-cde8-4f4a-96db-316857d0387c', N'given_name', N'John')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (25, N'd45119c7-6e65-47db-b947-bc0280e88394', N'given_name', N'John')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (26, N'd45119c7-6e65-47db-b947-bc0280e88394', N'family_name', N'Doe')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (27, N'd45119c7-6e65-47db-b947-bc0280e88394', N'role', N'Admin')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (28, N'd45119c7-6e65-47db-b947-bc0280e88394', N'location', N'HN')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (29, N'60955217-9c4a-4e05-bf9d-5479f518040b', N'given_name', N'Luan')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (30, N'60955217-9c4a-4e05-bf9d-5479f518040b', N'family_name', N'Nguyen')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (31, N'60955217-9c4a-4e05-bf9d-5479f518040b', N'role', N'Staff')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (32, N'60955217-9c4a-4e05-bf9d-5479f518040b', N'location', N'HN')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (33, N'569f2d08-f323-4626-a62c-27ec9a82a88d', N'given_name', N'Luan')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (34, N'569f2d08-f323-4626-a62c-27ec9a82a88d', N'family_name', N'Nguyen')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (35, N'569f2d08-f323-4626-a62c-27ec9a82a88d', N'role', N'Staff')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (36, N'569f2d08-f323-4626-a62c-27ec9a82a88d', N'location', N'HN')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (37, N'96788398-d595-4178-b211-2b415ae522dc', N'given_name', N'Luan')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (38, N'96788398-d595-4178-b211-2b415ae522dc', N'family_name', N'Nguyen Ahihi')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (39, N'96788398-d595-4178-b211-2b415ae522dc', N'role', N'Staff')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (40, N'96788398-d595-4178-b211-2b415ae522dc', N'location', N'HN')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (41, N'b2c78dca-f572-441b-81b5-e2e1b8622080', N'given_name', N'Luan')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (42, N'b2c78dca-f572-441b-81b5-e2e1b8622080', N'family_name', N'Nguyen')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (43, N'b2c78dca-f572-441b-81b5-e2e1b8622080', N'role', N'Admin')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (44, N'b2c78dca-f572-441b-81b5-e2e1b8622080', N'location', N'HCM')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (45, N'0a301f07-5750-498f-b0cf-942a7aa1e466', N'given_name', N'Luan')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (46, N'0a301f07-5750-498f-b0cf-942a7aa1e466', N'family_name', N'Nguyen')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (47, N'0a301f07-5750-498f-b0cf-942a7aa1e466', N'role', N'Admin')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (48, N'0a301f07-5750-498f-b0cf-942a7aa1e466', N'location', N'DN')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (49, N'673f7f47-894b-4407-8f7b-9fcb65edb388', N'given_name', N'Luan')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (50, N'673f7f47-894b-4407-8f7b-9fcb65edb388', N'family_name', N'Nguyen')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (51, N'673f7f47-894b-4407-8f7b-9fcb65edb388', N'role', N'Staff')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (52, N'673f7f47-894b-4407-8f7b-9fcb65edb388', N'location', N'DN')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (53, N'4b42fc6b-6e1b-4155-85b1-492db972fc7c', N'given_name', N'LuanTest')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (54, N'4b42fc6b-6e1b-4155-85b1-492db972fc7c', N'family_name', N'Nguyen')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (55, N'4b42fc6b-6e1b-4155-85b1-492db972fc7c', N'role', N'Admin')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (56, N'4b42fc6b-6e1b-4155-85b1-492db972fc7c', N'location', N'HN')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (57, N'cfcc316b-47ec-4eaf-9b41-d27756049e19', N'given_name', N'Luan')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (58, N'cfcc316b-47ec-4eaf-9b41-d27756049e19', N'family_name', N'Nguyen')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (59, N'cfcc316b-47ec-4eaf-9b41-d27756049e19', N'role', N'Staff')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (60, N'cfcc316b-47ec-4eaf-9b41-d27756049e19', N'location', N'HN')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (61, N'e174a180-b29d-40a1-9bd1-4a06c3029c72', N'given_name', N'test')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (62, N'e174a180-b29d-40a1-9bd1-4a06c3029c72', N'family_name', N'Nguyen')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (63, N'e174a180-b29d-40a1-9bd1-4a06c3029c72', N'role', N'Admin')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (64, N'e174a180-b29d-40a1-9bd1-4a06c3029c72', N'location', N'HN')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (65, N'2c7b5235-ad54-4803-af3f-87856582f9ac', N'given_name', N'Luan')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (66, N'2c7b5235-ad54-4803-af3f-87856582f9ac', N'family_name', N'Nguyen')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (67, N'2c7b5235-ad54-4803-af3f-87856582f9ac', N'role', N'Staff')
INSERT [dbo].[AspNetUserClaims] ([Id], [UserId], [ClaimType], [ClaimValue]) VALUES (68, N'2c7b5235-ad54-4803-af3f-87856582f9ac', N'location', N'HN')
SET IDENTITY_INSERT [dbo].[AspNetUserClaims] OFF
GO
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'0a301f07-5750-498f-b0cf-942a7aa1e466', N'2f17ffc3-d2be-494f-bdeb-0b80a5dbf75d')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'2c7b5235-ad54-4803-af3f-87856582f9ac', N'cdfaf085-01a8-43dc-b3ee-a3ef1a752742')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'4b42fc6b-6e1b-4155-85b1-492db972fc7c', N'2f17ffc3-d2be-494f-bdeb-0b80a5dbf75d')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'569f2d08-f323-4626-a62c-27ec9a82a88d', N'cdfaf085-01a8-43dc-b3ee-a3ef1a752742')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'5ec724d4-99b1-4d85-b519-308d4e028b83', N'cdfaf085-01a8-43dc-b3ee-a3ef1a752742')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'60955217-9c4a-4e05-bf9d-5479f518040b', N'cdfaf085-01a8-43dc-b3ee-a3ef1a752742')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'673f7f47-894b-4407-8f7b-9fcb65edb388', N'cdfaf085-01a8-43dc-b3ee-a3ef1a752742')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'674354ef-cde8-4f4a-96db-316857d0387c', N'cdfaf085-01a8-43dc-b3ee-a3ef1a752742')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'96788398-d595-4178-b211-2b415ae522dc', N'cdfaf085-01a8-43dc-b3ee-a3ef1a752742')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'b2c78dca-f572-441b-81b5-e2e1b8622080', N'2f17ffc3-d2be-494f-bdeb-0b80a5dbf75d')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'cfcc316b-47ec-4eaf-9b41-d27756049e19', N'cdfaf085-01a8-43dc-b3ee-a3ef1a752742')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'd45119c7-6e65-47db-b947-bc0280e88394', N'2f17ffc3-d2be-494f-bdeb-0b80a5dbf75d')
INSERT [dbo].[AspNetUserRoles] ([UserId], [RoleId]) VALUES (N'e174a180-b29d-40a1-9bd1-4a06c3029c72', N'2f17ffc3-d2be-494f-bdeb-0b80a5dbf75d')
GO
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'0a301f07-5750-498f-b0cf-942a7aa1e466', N'Luan', N'Nguyen', N'Luan Nguyen', CAST(N'1999-06-02T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-02T00:00:00.0000000' AS DateTime2), N'Male', N'Admin', NULL, N'DN', 0, N'luannguyen123', N'LUANNGUYEN123', N'phucluan@gmail.com', N'PHUCLUAN@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEKDMTkFgwWqtRqLzj6fXdcONbplK4Ho84dF2PFxK1JFmpeVJj1gqj5gI3B+ebAmYnw==', N'XIABT6M4XEMWK63LQG6QS3SUFIJWLJ2S', N'a7c6004c-cdd9-4c89-9abe-473db112b2bc', NULL, 0, 0, NULL, 1, 0, CAST(N'2021-12-02T10:04:22.2476162' AS DateTime2))
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'2c7b5235-ad54-4803-af3f-87856582f9ac', N'Luan', N'Nguyen', N'Luan Nguyen', CAST(N'2000-06-07T00:00:00.0000000' AS DateTime2), CAST(N'2022-01-03T00:00:00.0000000' AS DateTime2), N'Male', N'Staff', N'SD0008', N'HN', 0, N'luannashtech', N'LUANNASHTECH', N'phucluan6058000@gmail.com', N'PHUCLUAN6058000@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEJphaK+Mi+XaTlyjwwX00aLB5f7OyJP7kgGfsOVuIrPxWf+xdowFFFVDCvBWcAsZ0Q==', N'TVO6I5IYDDYE67E6QUSLNSVUXV3K4EI7', N'9da6d20e-c7cf-4914-afbb-c400f389cfc3', NULL, 0, 0, NULL, 1, 0, CAST(N'2022-04-26T10:36:44.6025650' AS DateTime2))
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'4b42fc6b-6e1b-4155-85b1-492db972fc7c', N'LuanTest', N'Nguyen', N'LuanTest Nguyen', CAST(N'1997-01-27T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-06T00:00:00.0000000' AS DateTime2), N'Male', N'Admin', NULL, N'HN', 0, N'luannguyenadmin', N'LUANNGUYENADMIN', N'phucluan6052111000@gmail.com', N'PHUCLUAN6052111000@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAED2Yu8uvI3bWUdzo3UtMVMi2O++FZ8H+CF3TjM2s7P8rA/xu9SX5QSwe2kMBPX94qQ==', N'VVAAVTGINGKCORKMFS5P34OEFV5YZ5NP', N'c1813375-e766-4903-887d-73544ac1a81b', NULL, 0, 0, NULL, 1, 0, CAST(N'2021-12-10T06:03:22.2622272' AS DateTime2))
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'569f2d08-f323-4626-a62c-27ec9a82a88d', N'Luan', N'Nguyen', N'Luan Nguyen', CAST(N'2001-07-25T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-25T00:00:00.0000000' AS DateTime2), N'Female', N'Staff', N'SD0004', N'DN', 0, N'testluan', N'TESTLUAN', N'ahihi@localhost.com', N'AHIHI@LOCALHOST.COM', 0, N'AQAAAAEAACcQAAAAEEunT0YNasphkeJWv9+fPqOZQyAxv3q7WJJsmvpj5xfFLOMVbKV8z0CLOlh1ZXXtyw==', N'KTIDO7VBNKCGG5FJOTGI4CFQ52NOKJEJ', N'947f6475-ce41-47d8-be1e-0d2b35af9cda', NULL, 0, 0, NULL, 1, 0, CAST(N'2021-11-25T03:32:43.7703640' AS DateTime2))
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'5ec724d4-99b1-4d85-b519-308d4e028b83', N'John', N'Doe', N'John Doe', CAST(N'2001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-17T17:47:20.7381037' AS DateTime2), N'Male', N'Staff', N'SD0002', N'HN', 0, N'johnd1', N'JOHND1', NULL, NULL, 0, N'AQAAAAEAACcQAAAAEH2OmxmGa3CiNzjp7QwhmmpSk3JZ8kOxxiyeJ3A61U1ITmcw1QIVd5zmVX5rzFN/Lg==', N'T4Y7AHDNIJVCYZU63TOZ7U33FUIHQTSX', N'63cd2217-40b4-4288-a7c2-24fbeb129721', NULL, 0, 0, CAST(N'2022-04-26T10:19:23.2135341+00:00' AS DateTimeOffset), 1, 0, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'60955217-9c4a-4e05-bf9d-5479f518040b', N'Luan', N'Nguyen', N'Luan Nguyen', CAST(N'2001-02-10T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-23T00:00:00.0000000' AS DateTime2), N'Male', N'Staff', N'SD0003', N'HN', 0, N'luannguyen', N'LUANNGUYEN', N'phucluan60520002@gmail.com', N'PHUCLUAN60520002@GMAIL.COM', 0, N'AQAAAAEAACcQAAAAEMw2HL6Z3NHxYhQRfFYPn7BJC4J7Y64njrj+5apXLAgJ8CpD8tLXO+++HrOJjqgQ4A==', N'ENMPYFACDNWKR2UP4FNAGE7A3EAWPECI', N'f9994ecd-e860-45c4-8c94-da1a1e4788bf', NULL, 0, 0, NULL, 1, 0, CAST(N'2021-11-25T04:06:06.7076316' AS DateTime2))
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'673f7f47-894b-4407-8f7b-9fcb65edb388', N'Luan', N'Nguyen', N'Luan Nguyen', CAST(N'1998-06-02T00:00:00.0000000' AS DateTime2), CAST(N'2021-10-25T00:00:00.0000000' AS DateTime2), N'Male', N'Staff', N'SD0006', N'DN', 0, N'luannguyentestdn', N'LUANNGUYENTESTDN', N'vvi39@eoopy.com', N'VVI39@EOOPY.COM', 0, N'AQAAAAEAACcQAAAAEFWJHZ/1gqOqwDfvT5mjmaMBp50wdWjmW6IHuS3pJ1kIUNqP95Vj/dQ7HP9gEEShtA==', N'65IMRXLKR4YPVNPN5BX3MLP7UTUTYJIP', N'e87846a5-c4af-48ed-b5d6-355464346050', NULL, 0, 0, NULL, 1, 0, CAST(N'2021-12-02T10:44:04.4390592' AS DateTime2))
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'674354ef-cde8-4f4a-96db-316857d0387c', N'John', N'Doe', N'John Doe', CAST(N'2001-01-01T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-18T22:33:16.5486605' AS DateTime2), N'Male', N'Staff', N'SD0002', N'DN', 0, N'Staff1', N'STAFF1', NULL, NULL, 0, N'AQAAAAEAACcQAAAAEIxRraP8Fa5ahhBh79/7pEIeINTvq4KutM18n03w0jWsnl6xj5xuK61U/d+BjLir/w==', N'OWDK73MM5IHZP3UFELU4EPGS4TNHRVFW', N'd87f079d-f0af-4e11-b058-3224e9e6d437', NULL, 0, 0, NULL, 1, 0, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'96788398-d595-4178-b211-2b415ae522dc', N'Luan', N'Nguyen Ahihi', N'Luan Nguyen Ahihi', CAST(N'2000-03-25T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-25T00:00:00.0000000' AS DateTime2), N'Female', N'Staff', N'SD0005', N'HN', 1, N'test2', N'TEST2', N'vvi34919@eoopy.com', N'VVI34919@EOOPY.COM', 0, N'AQAAAAEAACcQAAAAEIGb96aw892jCBEzXH1x9tiuGdOBp377WwbpX5o4RXmMdKXpOeZqjK74OobmQGbgrw==', N'RSLFQU3QO3AC6V2S3V7EFJLGQMHPAYD5', N'2dd8199f-d4c3-4a98-95b3-ee8cd92d6959', NULL, 0, 0, NULL, 1, 0, CAST(N'2021-11-25T04:06:41.2874834' AS DateTime2))
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'b2c78dca-f572-441b-81b5-e2e1b8622080', N'Luan', N'Nguyen', N'Luan Nguyen', CAST(N'2001-02-02T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-28T16:32:18.0978358' AS DateTime2), N'Male', N'Admin', NULL, N'HCM', 0, N'Admin2', N'ADMIN2', N'Luan@e.com', N'LUAN@E.COM', 0, N'AQAAAAEAACcQAAAAEL2JuBZCpzH09PsZvVdnmK8cYPDNUfT0twIH21qjDMxqlgzd0Kdraa5AkdwWxCl4XQ==', N'7CA6XPIGMTC4MLAMOFCR6LLXHALYUFTA', N'aa107797-1245-4a05-9e13-4259d60dcd55', NULL, 0, 0, NULL, 1, 0, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'cfcc316b-47ec-4eaf-9b41-d27756049e19', N'Luan', N'Nguyen', N'Luan Nguyen', CAST(N'2002-12-02T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-08T00:00:00.0000000' AS DateTime2), N'Male', N'Staff', N'SD0007', N'HN', 0, N'luansendgrid', N'LUANSENDGRID', N'luannguyen2873.k44@st.ueh.edu.vn', N'LUANNGUYEN2873.K44@ST.UEH.EDU.VN', 0, N'AQAAAAEAACcQAAAAEBERmkPpq22sa9wUR7MJdMuQPmLuNue80svxDjP+0di4JGGxnSB3QqNKizIRfZqKxg==', N'MBNTZLR5LTGTMBVH6OW4WXARDZKC2UYP', N'f12a4ddb-d067-4d4b-bd2f-3eb115fea76a', NULL, 0, 0, CAST(N'2022-04-26T10:27:23.5118496+00:00' AS DateTimeOffset), 1, 0, CAST(N'2021-12-08T07:18:49.3075383' AS DateTime2))
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'd45119c7-6e65-47db-b947-bc0280e88394', N'John', N'Doe', N'John Doe', CAST(N'2001-02-02T00:00:00.0000000' AS DateTime2), CAST(N'2021-11-25T10:22:13.3095559' AS DateTime2), N'Male', N'Admin', NULL, N'HN', 0, N'Admin1', N'ADMIN1', N'John@e.com', N'JOHN@E.COM', 0, N'AQAAAAEAACcQAAAAEI2/+UqE2jVwSvKJJh3nFLpRM/i4ivEqSP6HUz6QKjh9V1rL0x0c0WmULjZqcPZviQ==', N'B5VAERTNSLBTE65UX4OAEGOUSJN3K7G7', N'1367eebf-5be0-4ad4-87c2-5b146d2b1753', NULL, 0, 0, NULL, 1, 0, CAST(N'0001-01-01T00:00:00.0000000' AS DateTime2))
INSERT [dbo].[AspNetUsers] ([Id], [FirstName], [LastName], [FullName], [DateOfBirth], [JoinedDate], [Gender], [Type], [CodeStaff], [Location], [Disable], [UserName], [NormalizedUserName], [Email], [NormalizedEmail], [EmailConfirmed], [PasswordHash], [SecurityStamp], [ConcurrencyStamp], [PhoneNumber], [PhoneNumberConfirmed], [TwoFactorEnabled], [LockoutEnd], [LockoutEnabled], [AccessFailedCount], [LastModified]) VALUES (N'e174a180-b29d-40a1-9bd1-4a06c3029c72', N'test', N'Nguyen', N'test Nguyen', CAST(N'2000-02-07T00:00:00.0000000' AS DateTime2), CAST(N'2021-12-14T00:00:00.0000000' AS DateTime2), N'Male', N'Admin', NULL, N'HN', 0, N'LuanNguyentestemail', N'LUANNGUYENTESTEMAIL', N'luannguyen287.k44@st.ueh.edu.vn', N'LUANNGUYEN287.K44@ST.UEH.EDU.VN', 0, N'AQAAAAEAACcQAAAAEOOljW61zXmeCBJpfx6aIxNXYbKNlg2CJ12foyecRHJUMSYDaIm5WDIikyIeRfPhjA==', N'DAOV7Q7OLY3MN3JWOHCVRTI7YJYUKCR7', N'157d1526-4f0d-4a73-b1ce-ba3dcfc488e2', NULL, 0, 0, NULL, 1, 1, CAST(N'2021-12-14T15:23:14.7279078' AS DateTime2))
GO
ALTER TABLE [dbo].[AspNetUsers] ADD  DEFAULT ('0001-01-01T00:00:00.0000000') FOR [LastModified]
GO
ALTER TABLE [dbo].[AspNetRoleClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetRoleClaims] CHECK CONSTRAINT [FK_AspNetRoleClaims_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserClaims]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserClaims] CHECK CONSTRAINT [FK_AspNetUserClaims_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserLogins]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserLogins] CHECK CONSTRAINT [FK_AspNetUserLogins_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId] FOREIGN KEY([RoleId])
REFERENCES [dbo].[AspNetRoles] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetRoles_RoleId]
GO
ALTER TABLE [dbo].[AspNetUserRoles]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserRoles] CHECK CONSTRAINT [FK_AspNetUserRoles_AspNetUsers_UserId]
GO
ALTER TABLE [dbo].[AspNetUserTokens]  WITH CHECK ADD  CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId] FOREIGN KEY([UserId])
REFERENCES [dbo].[AspNetUsers] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[AspNetUserTokens] CHECK CONSTRAINT [FK_AspNetUserTokens_AspNetUsers_UserId]
GO
