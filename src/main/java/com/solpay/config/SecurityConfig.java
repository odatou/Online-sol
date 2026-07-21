package com.solpay.config;


import com.solpay.security.JwtAuthenticationFilter;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.web.SecurityFilterChain;

import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;


import java.util.List;



@Configuration
@EnableWebSecurity
public class SecurityConfig {



    private final JwtAuthenticationFilter jwtAuthenticationFilter;



    public SecurityConfig(
            JwtAuthenticationFilter jwtAuthenticationFilter
    ){

        this.jwtAuthenticationFilter = jwtAuthenticationFilter;

    }




    @Bean
    public SecurityFilterChain securityFilterChain(
            HttpSecurity http
    ) throws Exception {


        http


                // Désactiver CSRF paske se API REST
                .csrf(csrf -> csrf.disable())



                // Autoriser React pou kominike ak API a
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))



                // Pa itilize session
                .sessionManagement(session ->
                        session.sessionCreationPolicy(
                                SessionCreationPolicy.STATELESS
                        )
                )



                // Règ aksè yo
                .authorizeHttpRequests(auth -> auth


                        // Routes piblik
                        .requestMatchers(
                                "/api/auth/**"
                        )
                        .permitAll()



                        // Tout lòt bagay mande token
                        .anyRequest()
                        .permitAll()

                )



                // Mete JWT filter la avan Spring Security filter la
                .addFilterBefore(
                        jwtAuthenticationFilter,
                        UsernamePasswordAuthenticationFilter.class
                );



        return http.build();

    }





    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration configuration
    ) throws Exception {


        return configuration.getAuthenticationManager();

    }





    @Bean
    public CorsConfigurationSource corsConfigurationSource(){


        CorsConfiguration configuration =
                new CorsConfiguration();



        configuration.setAllowedOrigins(
                List.of(
                        "http://localhost:5173"
                )
        );


        configuration.setAllowedMethods(
                List.of(
                        "GET",
                        "POST",
                        "PUT",
                        "DELETE",
                        "OPTIONS"
                )
        );


        configuration.setAllowedHeaders(
                List.of("*")
        );


        configuration.setAllowCredentials(true);



        UrlBasedCorsConfigurationSource source =
                new UrlBasedCorsConfigurationSource();


        source.registerCorsConfiguration(
                "/**",
                configuration
        );


        return source;

    }


}