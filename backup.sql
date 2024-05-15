PGDMP         
    
            |         
   cookinplus     14.11 (Debian 14.11-1.pgdg120+2) %   14.11 (Ubuntu 14.11-0ubuntu0.22.04.1) [    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16384 
   cookinplus    DATABASE     ^   CREATE DATABASE cookinplus WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';
    DROP DATABASE cookinplus;
                postgres    false                        3079    16401 	   uuid-ossp 	   EXTENSION     ?   CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;
    DROP EXTENSION "uuid-ossp";
                   false            �           0    0    EXTENSION "uuid-ossp"    COMMENT     W   COMMENT ON EXTENSION "uuid-ossp" IS 'generate universally unique identifiers (UUIDs)';
                        false    2            �            1259    16391    adonis_schema    TABLE     �   CREATE TABLE public.adonis_schema (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    batch integer NOT NULL,
    migration_time timestamp with time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.adonis_schema;
       public         heap    postgres    false            �            1259    16390    adonis_schema_id_seq    SEQUENCE     �   CREATE SEQUENCE public.adonis_schema_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.adonis_schema_id_seq;
       public          postgres    false    211            �           0    0    adonis_schema_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.adonis_schema_id_seq OWNED BY public.adonis_schema.id;
          public          postgres    false    210            �            1259    16398    adonis_schema_versions    TABLE     M   CREATE TABLE public.adonis_schema_versions (
    version integer NOT NULL
);
 *   DROP TABLE public.adonis_schema_versions;
       public         heap    postgres    false            �            1259    16563    advices    TABLE     �   CREATE TABLE public.advices (
    id uuid NOT NULL,
    description text NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    nutritionist_id uuid NOT NULL,
    recipe_id uuid NOT NULL
);
    DROP TABLE public.advices;
       public         heap    postgres    false            �            1259    16442    holidays    TABLE       CREATE TABLE public.holidays (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    description text NOT NULL,
    active boolean NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.holidays;
       public         heap    postgres    false            �            1259    16412    images    TABLE     ,  CREATE TABLE public.images (
    id uuid NOT NULL,
    url character varying(255) NOT NULL,
    file_name character varying(255) NOT NULL,
    content_type character varying(255) NOT NULL,
    size integer NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.images;
       public         heap    postgres    false            �            1259    16551    ingredients    TABLE     �   CREATE TABLE public.ingredients (
    id uuid NOT NULL,
    description text NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    recipe_id uuid NOT NULL
);
    DROP TABLE public.ingredients;
       public         heap    postgres    false            �            1259    16600    instructions    TABLE     �   CREATE TABLE public.instructions (
    id uuid NOT NULL,
    description text NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    recipe_id uuid NOT NULL,
    section_id uuid NOT NULL
);
     DROP TABLE public.instructions;
       public         heap    postgres    false            �            1259    16421    meals    TABLE     �   CREATE TABLE public.meals (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.meals;
       public         heap    postgres    false            �            1259    16428    nationalities    TABLE       CREATE TABLE public.nationalities (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    short_name character varying(255) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    image_id uuid NOT NULL
);
 !   DROP TABLE public.nationalities;
       public         heap    postgres    false            �            1259    16515    nutritionists    TABLE     �   CREATE TABLE public.nutritionists (
    id uuid NOT NULL,
    instagram character varying(255) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    user_id uuid NOT NULL
);
 !   DROP TABLE public.nutritionists;
       public         heap    postgres    false            �            1259    16451    permissions    TABLE     �   CREATE TABLE public.permissions (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.permissions;
       public         heap    postgres    false            �            1259    16527    recipes    TABLE     �  CREATE TABLE public.recipes (
    id uuid NOT NULL,
    slug character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    story text NOT NULL,
    cooking_time integer NOT NULL,
    servings integer NOT NULL,
    difficulty integer NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone,
    nationality_id uuid NOT NULL,
    image_id uuid NOT NULL,
    meal_id uuid
);
    DROP TABLE public.recipes;
       public         heap    postgres    false            �            1259    16580    recipes_holidays    TABLE     d   CREATE TABLE public.recipes_holidays (
    recipe_id uuid NOT NULL,
    holiday_id uuid NOT NULL
);
 $   DROP TABLE public.recipes_holidays;
       public         heap    postgres    false            �            1259    16458    roles    TABLE     �   CREATE TABLE public.roles (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL
);
    DROP TABLE public.roles;
       public         heap    postgres    false            �            1259    16465    roles_permissions    TABLE     f   CREATE TABLE public.roles_permissions (
    role_id uuid NOT NULL,
    permission_id uuid NOT NULL
);
 %   DROP TABLE public.roles_permissions;
       public         heap    postgres    false            �            1259    16593    sections    TABLE     �   CREATE TABLE public.sections (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    created_at timestamp with time zone,
    updated_at timestamp with time zone
);
    DROP TABLE public.sections;
       public         heap    postgres    false            �            1259    16478    users    TABLE     R  CREATE TABLE public.users (
    id uuid NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    created_at timestamp with time zone NOT NULL,
    updated_at timestamp with time zone NOT NULL,
    role_id uuid NOT NULL,
    image_id uuid NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16497    users_tokens    TABLE     �  CREATE TABLE public.users_tokens (
    id uuid DEFAULT public.uuid_generate_v4() NOT NULL,
    name character varying(255) NOT NULL,
    type character varying(255) NOT NULL,
    token character varying(255) NOT NULL,
    expires_at timestamp with time zone,
    refresh_token character varying(255) NOT NULL,
    refresh_token_expires_at timestamp with time zone NOT NULL,
    created_at timestamp with time zone NOT NULL,
    user_id uuid NOT NULL
);
     DROP TABLE public.users_tokens;
       public         heap    postgres    false    2            �           2604    16394    adonis_schema id    DEFAULT     t   ALTER TABLE ONLY public.adonis_schema ALTER COLUMN id SET DEFAULT nextval('public.adonis_schema_id_seq'::regclass);
 ?   ALTER TABLE public.adonis_schema ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            �          0    16391    adonis_schema 
   TABLE DATA           H   COPY public.adonis_schema (id, name, batch, migration_time) FROM stdin;
    public          postgres    false    211   Uu       �          0    16398    adonis_schema_versions 
   TABLE DATA           9   COPY public.adonis_schema_versions (version) FROM stdin;
    public          postgres    false    212   �v       �          0    16563    advices 
   TABLE DATA           f   COPY public.advices (id, description, created_at, updated_at, nutritionist_id, recipe_id) FROM stdin;
    public          postgres    false    225   w       �          0    16442    holidays 
   TABLE DATA           Y   COPY public.holidays (id, name, description, active, created_at, updated_at) FROM stdin;
    public          postgres    false    216   �w       �          0    16412    images 
   TABLE DATA           `   COPY public.images (id, url, file_name, content_type, size, created_at, updated_at) FROM stdin;
    public          postgres    false    213   lx       �          0    16551    ingredients 
   TABLE DATA           Y   COPY public.ingredients (id, description, created_at, updated_at, recipe_id) FROM stdin;
    public          postgres    false    224   �y       �          0    16600    instructions 
   TABLE DATA           f   COPY public.instructions (id, description, created_at, updated_at, recipe_id, section_id) FROM stdin;
    public          postgres    false    228   �z       �          0    16421    meals 
   TABLE DATA           A   COPY public.meals (id, name, created_at, updated_at) FROM stdin;
    public          postgres    false    214   :|       �          0    16428    nationalities 
   TABLE DATA           _   COPY public.nationalities (id, name, short_name, created_at, updated_at, image_id) FROM stdin;
    public          postgres    false    215   }       �          0    16515    nutritionists 
   TABLE DATA           W   COPY public.nutritionists (id, instagram, created_at, updated_at, user_id) FROM stdin;
    public          postgres    false    222   �}       �          0    16451    permissions 
   TABLE DATA           G   COPY public.permissions (id, name, created_at, updated_at) FROM stdin;
    public          postgres    false    217   ~       �          0    16527    recipes 
   TABLE DATA           �   COPY public.recipes (id, slug, name, story, cooking_time, servings, difficulty, created_at, updated_at, nationality_id, image_id, meal_id) FROM stdin;
    public          postgres    false    223   2~       �          0    16580    recipes_holidays 
   TABLE DATA           A   COPY public.recipes_holidays (recipe_id, holiday_id) FROM stdin;
    public          postgres    false    226          �          0    16458    roles 
   TABLE DATA           A   COPY public.roles (id, name, created_at, updated_at) FROM stdin;
    public          postgres    false    218   Z       �          0    16465    roles_permissions 
   TABLE DATA           C   COPY public.roles_permissions (role_id, permission_id) FROM stdin;
    public          postgres    false    219   �       �          0    16593    sections 
   TABLE DATA           D   COPY public.sections (id, name, created_at, updated_at) FROM stdin;
    public          postgres    false    227   �       �          0    16478    users 
   TABLE DATA           e   COPY public.users (id, name, email, password, created_at, updated_at, role_id, image_id) FROM stdin;
    public          postgres    false    220   ��       �          0    16497    users_tokens 
   TABLE DATA           �   COPY public.users_tokens (id, name, type, token, expires_at, refresh_token, refresh_token_expires_at, created_at, user_id) FROM stdin;
    public          postgres    false    221   ��       �           0    0    adonis_schema_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.adonis_schema_id_seq', 19, true);
          public          postgres    false    210            �           2606    16397     adonis_schema adonis_schema_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.adonis_schema
    ADD CONSTRAINT adonis_schema_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.adonis_schema DROP CONSTRAINT adonis_schema_pkey;
       public            postgres    false    211            �           2606    16569    advices advices_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.advices
    ADD CONSTRAINT advices_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.advices DROP CONSTRAINT advices_pkey;
       public            postgres    false    225            �           2606    16450    holidays holidays_name_unique 
   CONSTRAINT     X   ALTER TABLE ONLY public.holidays
    ADD CONSTRAINT holidays_name_unique UNIQUE (name);
 G   ALTER TABLE ONLY public.holidays DROP CONSTRAINT holidays_name_unique;
       public            postgres    false    216            �           2606    16448    holidays holidays_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.holidays
    ADD CONSTRAINT holidays_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.holidays DROP CONSTRAINT holidays_pkey;
       public            postgres    false    216            �           2606    16420    images images_file_name_unique 
   CONSTRAINT     ^   ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_file_name_unique UNIQUE (file_name);
 H   ALTER TABLE ONLY public.images DROP CONSTRAINT images_file_name_unique;
       public            postgres    false    213            �           2606    16418    images images_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.images
    ADD CONSTRAINT images_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.images DROP CONSTRAINT images_pkey;
       public            postgres    false    213            �           2606    16557    ingredients ingredients_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.ingredients
    ADD CONSTRAINT ingredients_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.ingredients DROP CONSTRAINT ingredients_pkey;
       public            postgres    false    224            �           2606    16606    instructions instructions_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.instructions
    ADD CONSTRAINT instructions_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.instructions DROP CONSTRAINT instructions_pkey;
       public            postgres    false    228            �           2606    16427    meals meals_name_unique 
   CONSTRAINT     R   ALTER TABLE ONLY public.meals
    ADD CONSTRAINT meals_name_unique UNIQUE (name);
 A   ALTER TABLE ONLY public.meals DROP CONSTRAINT meals_name_unique;
       public            postgres    false    214            �           2606    16425    meals meals_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.meals
    ADD CONSTRAINT meals_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.meals DROP CONSTRAINT meals_pkey;
       public            postgres    false    214            �           2606    16434     nationalities nationalities_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.nationalities
    ADD CONSTRAINT nationalities_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.nationalities DROP CONSTRAINT nationalities_pkey;
       public            postgres    false    215            �           2606    16436 -   nationalities nationalities_short_name_unique 
   CONSTRAINT     n   ALTER TABLE ONLY public.nationalities
    ADD CONSTRAINT nationalities_short_name_unique UNIQUE (short_name);
 W   ALTER TABLE ONLY public.nationalities DROP CONSTRAINT nationalities_short_name_unique;
       public            postgres    false    215            �           2606    16521 ,   nutritionists nutritionists_instagram_unique 
   CONSTRAINT     l   ALTER TABLE ONLY public.nutritionists
    ADD CONSTRAINT nutritionists_instagram_unique UNIQUE (instagram);
 V   ALTER TABLE ONLY public.nutritionists DROP CONSTRAINT nutritionists_instagram_unique;
       public            postgres    false    222            �           2606    16519     nutritionists nutritionists_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.nutritionists
    ADD CONSTRAINT nutritionists_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.nutritionists DROP CONSTRAINT nutritionists_pkey;
       public            postgres    false    222            �           2606    16457 #   permissions permissions_name_unique 
   CONSTRAINT     ^   ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_name_unique UNIQUE (name);
 M   ALTER TABLE ONLY public.permissions DROP CONSTRAINT permissions_name_unique;
       public            postgres    false    217            �           2606    16455    permissions permissions_pkey 
   CONSTRAINT     Z   ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT permissions_pkey PRIMARY KEY (id);
 F   ALTER TABLE ONLY public.permissions DROP CONSTRAINT permissions_pkey;
       public            postgres    false    217            �           2606    16533    recipes recipes_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_pkey PRIMARY KEY (id);
 >   ALTER TABLE ONLY public.recipes DROP CONSTRAINT recipes_pkey;
       public            postgres    false    223            �           2606    16535    recipes recipes_slug_unique 
   CONSTRAINT     V   ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_slug_unique UNIQUE (slug);
 E   ALTER TABLE ONLY public.recipes DROP CONSTRAINT recipes_slug_unique;
       public            postgres    false    223            �           2606    16464    roles roles_name_unique 
   CONSTRAINT     R   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_name_unique UNIQUE (name);
 A   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_name_unique;
       public            postgres    false    218            �           2606    16462    roles roles_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.roles DROP CONSTRAINT roles_pkey;
       public            postgres    false    218            �           2606    16599    sections sections_name_unique 
   CONSTRAINT     X   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_name_unique UNIQUE (name);
 G   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_name_unique;
       public            postgres    false    227            �           2606    16597    sections sections_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.sections DROP CONSTRAINT sections_pkey;
       public            postgres    false    227            �           2606    16486    users users_email_unique 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_unique UNIQUE (email);
 B   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_unique;
       public            postgres    false    220            �           2606    16484    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    220            �           2606    16504    users_tokens users_tokens_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.users_tokens
    ADD CONSTRAINT users_tokens_pkey PRIMARY KEY (id);
 H   ALTER TABLE ONLY public.users_tokens DROP CONSTRAINT users_tokens_pkey;
       public            postgres    false    221            �           2606    16508 .   users_tokens users_tokens_refresh_token_unique 
   CONSTRAINT     r   ALTER TABLE ONLY public.users_tokens
    ADD CONSTRAINT users_tokens_refresh_token_unique UNIQUE (refresh_token);
 X   ALTER TABLE ONLY public.users_tokens DROP CONSTRAINT users_tokens_refresh_token_unique;
       public            postgres    false    221            �           2606    16506 &   users_tokens users_tokens_token_unique 
   CONSTRAINT     b   ALTER TABLE ONLY public.users_tokens
    ADD CONSTRAINT users_tokens_token_unique UNIQUE (token);
 P   ALTER TABLE ONLY public.users_tokens DROP CONSTRAINT users_tokens_token_unique;
       public            postgres    false    221            �           1259    16509     users_tokens_refresh_token_index    INDEX     b   CREATE INDEX users_tokens_refresh_token_index ON public.users_tokens USING btree (refresh_token);
 4   DROP INDEX public.users_tokens_refresh_token_index;
       public            postgres    false    221            
           2606    16570 '   advices advices_nutritionist_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.advices
    ADD CONSTRAINT advices_nutritionist_id_foreign FOREIGN KEY (nutritionist_id) REFERENCES public.nutritionists(id);
 Q   ALTER TABLE ONLY public.advices DROP CONSTRAINT advices_nutritionist_id_foreign;
       public          postgres    false    222    3312    225                       2606    16575 !   advices advices_recipe_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.advices
    ADD CONSTRAINT advices_recipe_id_foreign FOREIGN KEY (recipe_id) REFERENCES public.recipes(id) ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.advices DROP CONSTRAINT advices_recipe_id_foreign;
       public          postgres    false    3314    223    225            	           2606    16558 )   ingredients ingredients_recipe_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.ingredients
    ADD CONSTRAINT ingredients_recipe_id_foreign FOREIGN KEY (recipe_id) REFERENCES public.recipes(id) ON DELETE CASCADE;
 S   ALTER TABLE ONLY public.ingredients DROP CONSTRAINT ingredients_recipe_id_foreign;
       public          postgres    false    223    224    3314                       2606    16607 +   instructions instructions_recipe_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.instructions
    ADD CONSTRAINT instructions_recipe_id_foreign FOREIGN KEY (recipe_id) REFERENCES public.recipes(id) ON DELETE CASCADE;
 U   ALTER TABLE ONLY public.instructions DROP CONSTRAINT instructions_recipe_id_foreign;
       public          postgres    false    228    223    3314                       2606    16612 ,   instructions instructions_section_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.instructions
    ADD CONSTRAINT instructions_section_id_foreign FOREIGN KEY (section_id) REFERENCES public.sections(id) ON DELETE CASCADE;
 V   ALTER TABLE ONLY public.instructions DROP CONSTRAINT instructions_section_id_foreign;
       public          postgres    false    228    3324    227            �           2606    16437 ,   nationalities nationalities_image_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.nationalities
    ADD CONSTRAINT nationalities_image_id_foreign FOREIGN KEY (image_id) REFERENCES public.images(id);
 V   ALTER TABLE ONLY public.nationalities DROP CONSTRAINT nationalities_image_id_foreign;
       public          postgres    false    3277    213    215                       2606    16522 +   nutritionists nutritionists_user_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.nutritionists
    ADD CONSTRAINT nutritionists_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.users(id);
 U   ALTER TABLE ONLY public.nutritionists DROP CONSTRAINT nutritionists_user_id_foreign;
       public          postgres    false    222    220    3301                       2606    16588 4   recipes_holidays recipes_holidays_holiday_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.recipes_holidays
    ADD CONSTRAINT recipes_holidays_holiday_id_foreign FOREIGN KEY (holiday_id) REFERENCES public.holidays(id) ON DELETE CASCADE;
 ^   ALTER TABLE ONLY public.recipes_holidays DROP CONSTRAINT recipes_holidays_holiday_id_foreign;
       public          postgres    false    226    3289    216                       2606    16583 3   recipes_holidays recipes_holidays_recipe_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.recipes_holidays
    ADD CONSTRAINT recipes_holidays_recipe_id_foreign FOREIGN KEY (recipe_id) REFERENCES public.recipes(id) ON DELETE CASCADE;
 ]   ALTER TABLE ONLY public.recipes_holidays DROP CONSTRAINT recipes_holidays_recipe_id_foreign;
       public          postgres    false    223    226    3314                       2606    16541     recipes recipes_image_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_image_id_foreign FOREIGN KEY (image_id) REFERENCES public.images(id);
 J   ALTER TABLE ONLY public.recipes DROP CONSTRAINT recipes_image_id_foreign;
       public          postgres    false    3277    213    223                       2606    16546    recipes recipes_meal_id_foreign    FK CONSTRAINT     ~   ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_meal_id_foreign FOREIGN KEY (meal_id) REFERENCES public.meals(id);
 I   ALTER TABLE ONLY public.recipes DROP CONSTRAINT recipes_meal_id_foreign;
       public          postgres    false    223    3281    214                       2606    16536 &   recipes recipes_nationality_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.recipes
    ADD CONSTRAINT recipes_nationality_id_foreign FOREIGN KEY (nationality_id) REFERENCES public.nationalities(id);
 P   ALTER TABLE ONLY public.recipes DROP CONSTRAINT recipes_nationality_id_foreign;
       public          postgres    false    223    215    3283                       2606    16473 9   roles_permissions roles_permissions_permission_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.roles_permissions
    ADD CONSTRAINT roles_permissions_permission_id_foreign FOREIGN KEY (permission_id) REFERENCES public.permissions(id) ON DELETE CASCADE;
 c   ALTER TABLE ONLY public.roles_permissions DROP CONSTRAINT roles_permissions_permission_id_foreign;
       public          postgres    false    217    219    3293                        2606    16468 3   roles_permissions roles_permissions_role_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.roles_permissions
    ADD CONSTRAINT roles_permissions_role_id_foreign FOREIGN KEY (role_id) REFERENCES public.roles(id) ON DELETE CASCADE;
 ]   ALTER TABLE ONLY public.roles_permissions DROP CONSTRAINT roles_permissions_role_id_foreign;
       public          postgres    false    218    3297    219                       2606    16492    users users_image_id_foreign    FK CONSTRAINT     }   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_image_id_foreign FOREIGN KEY (image_id) REFERENCES public.images(id);
 F   ALTER TABLE ONLY public.users DROP CONSTRAINT users_image_id_foreign;
       public          postgres    false    3277    220    213                       2606    16487    users users_role_id_foreign    FK CONSTRAINT     z   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_id_foreign FOREIGN KEY (role_id) REFERENCES public.roles(id);
 E   ALTER TABLE ONLY public.users DROP CONSTRAINT users_role_id_foreign;
       public          postgres    false    218    220    3297                       2606    16510 )   users_tokens users_tokens_user_id_foreign    FK CONSTRAINT     �   ALTER TABLE ONLY public.users_tokens
    ADD CONSTRAINT users_tokens_user_id_foreign FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;
 S   ALTER TABLE ONLY public.users_tokens DROP CONSTRAINT users_tokens_user_id_foreign;
       public          postgres    false    220    3301    221            �   �  x���Kn�0�}��$��#g)@�6��%C����($��խ|�!�<���V�n�2幎C{CQc��zNck�H^@_P�!��~�@J��H{�J��|)͠c�x��t�s��S�9�����\��|5%Q�^��R����4���Z�'�y]�%���`L��k=�?�����,�t/ӭ���X���za��4�W�Kv��W)�J�I�S_D\U�=v�V&���!>�t��'���w1���e4���G�J���y��Am�I.���{�����H�$M�T���2��g���T��Tεfu*�e�B3_�K��QOvu��{,�̅�q�<��V�W�FF������;�}�fR�q\滕��d�l+ʹ8����[6�����\؃���x<�pؗ�      �      x�3����� a �      �   �   x�}�9��0 k��d�ԑG���D
P%����/�vf�q��QT�^	I�0l-���Zc�~?�s��c����l-�Ӛ���˦,x�)����1e,P�e��y�	��p�{�w�?��cz�cWTi���B�a�쏒Bj%o�iC!�.J�Z[@�]���i�������A      �   �   x�}��� @k��>:��`�� �Ӝ�(��d�̒��ԑ�=���c�Sq��>r�5��ŔrqVG��LaC���.�Wo7u��m#1w�d�;_�C��f��}�g��Y���`�-�_B�0����y�Z W�1�      �     x�}ϻn�0��9~��m��n~�.�.�Q�6�$�_7K� �&�������W
�����\��:���x���so��]�q�v���֮/!zUuƕH*W��e:�����������P!������XOԒ�J��&�0��"yD�R5�j��.Zzg��<���y(k�Sb�TH� �������ƻÖ��R��5޿�<���
�Y����ִ��IN%�fp%�*Q���
�v����v�׻����zk����񐚯�i�?����      �   	  x���Mj�0�ur�싊lK���tc��t m`:����n]��>�Ru3g�W �"�<�YZ5�0�uk�����^�x���xs�����A�w�J-�Ph���� &5b�ƭ��]t\h�Ȯ Yo E�h�ѪW��������D��&��1���\��B�m��hע�hh��e���34��i�9O,��d�!e��0
*iqm	��}|M�x���*%a���(s���C��jV�e��z��?��q<g9�YSi�J�Yo��� �#��      �   �  x���;n1�k�)��#�1Ç� 9@�fH��KeWv�ۤ�9|�PB��w�O����V�Aʎ��X��c�����߶y�y�������/��E6�j�����2���{�#��I��Q�]�p��)@�Łd�:4���P	����k@6X���ƥALi�-��E :���2d�����oŹv�*�>��y�:m}=��:�����ڤ<���:�Ⱦ�s�]9Ux����y�MR�aP� 9s�hC �6C�“��Dmm�SrT�T�� �!%���6C����/��7��\W��]|��*�,=�v~���>�y�*YT���a#��~���6�O�׬͗�6�e=��|��Z�mc���0�/��-=����0�2fB�W*~�~���73��      �   �   x�}�?NC1����oG���Οng`qbG��*nĀ8ǻX_YX�W�}dgM#+l�ԡ(!d3��Z.��g�������}.2x^}8�|�z����I�Kk�A��P�Ҋ��D�L�,���u��Nv�x$�>��#���@�;b�!suX,�������=��T�I���y@c��o�Ai��E�CH���e7&34ɽ�sw4�a�      �   o   x�}�1�0 �9y;re;��t�O`fI�XBb��K��޴X��A�QALƴ �Q��[I��ޟt>��P��F|9ضR��mV�氂;��c��+�YSɯ-�|��!K      �   m   x�}�1�0 ����{e�ر��.q�%XP�_�`���D�Ƅ�G@%h��W���F�����_�~!@�,�L��y�(o�'�QJho0����OV����a鳦�~��"      �      x������ � �      �   �   x�}�?j�1����)�ْ�'c�"�e�$0$�Y�Ћ�[�B�^P��VH�*7`�T;�Ж0�!6��/�������p��x��|ݞ���ǭy[^�q����#12�@��Y�Ę?������T��Aw��&��i��fA\*R��D�ƪ�B����B�aȅp&���ڞ�,u�9�p��r:����Jv      �   H   x����  �w셌���\����%�i�@�/p� (�{j�d�$�s]�D�jpk�B�xN����c�M�M      �   T   x�}ɱ�  ��La�KB��n`���p������>�]Q=%��WY#�$g�=� $�����Ҥ4���v���+�3
      �      x������ � �      �   �   x�}ϻ�0��y
v��q�\�2�0�87�T����*�_:��r������!E�E؅�Mj�NK���!1�������d)�#�d�p�A�V�A��0t�;s��Y�u6E�|�Q��m�(nW
H�{O)ׄD�M�^o����8��d��&s�Ƙ7lD2      �   
  x�}��n�@@�5<E�tt�������U4�6醙a#JhS�����9���
*��yD�FG���h��8��4:2ʫ���_�:�.#s���Ӵ?�Wp��Đ�i8l��vV���JT�>ϗ��6e��f�$�iv�����Gj���(t�Yv��e�K��-�u�z�U5[���tX�}쟠��N�n��x�8���*�`�	�#b@�+*B� a�r�-"���)g�,�^�uĘE��w��hg�0� ��������_ՀX�      �   �   x�M�=KCA����_q{ٰ��l�663�3 ����D�_x΁l	^�n��W���0�d\2�����<g�n�����}�o�;Y �dJ��٦K`o�&-0���Q]�\��)8�%eÊ\���Lt:��Z�.�� �9�Cyh���N 2A�	��6P;M� }޿TZ���x ���������HQ�Sm�唅E��"-�r��1��v�����NH     